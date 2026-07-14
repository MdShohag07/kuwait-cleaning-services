# Deploying to a VPS (Hostinger / GoDaddy)

This site now has a SQLite database (admin panel content) and locally-stored uploaded images (`public/uploads/`). That means it needs a host with a **persistent filesystem and a long-running Node.js process** — a plain shared/cPanel hosting plan (built for PHP/WordPress) or a serverless platform (Vercel) will **not** work correctly, since the SQLite file and uploaded images would either be unwritable or wiped between requests/deploys.

**Get a VPS plan**, not shared hosting — on Hostinger this is "VPS Hosting" (KVM plans), on GoDaddy it's their VPS product. Any plan with root SSH access and at least 1GB RAM is enough for this site.

## One-time server setup

1. **Install Node.js 20+** on the VPS (Ubuntu example):
   ```
   curl -fsSL https://deb.nodesource.com/setup_20.x | sudo bash -
   sudo apt install -y nodejs
   ```
2. **Install PM2** (keeps the app running, restarts on crash/reboot):
   ```
   sudo npm install -g pm2
   ```
3. **Clone the repo** onto the server and `cd` into it.
4. **Create `.env`** in the project root (never commit this file):
   ```
   DATABASE_URL="file:./prod.db"
   AUTH_SECRET="<run: openssl rand -base64 32>"
   SEED_OWNER_EMAIL="owner@yourdomain.com"
   SEED_OWNER_PASSWORD="<a strong password>"
   SEED_ADMIN_EMAIL="admin@yourdomain.com"
   SEED_ADMIN_PASSWORD="<a strong password>"
   ```
5. **Install, migrate, seed, build**:
   ```
   npm ci
   npx prisma generate
   npx prisma migrate deploy
   npm run db:seed
   npm run build
   ```
6. **Start it under PM2**:
   ```
   pm2 start npm --name kcs -- start
   pm2 save
   pm2 startup   # follow the printed instructions so it survives a reboot
   ```
7. **Put Nginx in front of it** for your domain + free SSL (Certbot):
   ```nginx
   server {
     listen 80;
     server_name yourdomain.com www.yourdomain.com;
     location / {
       proxy_pass http://localhost:3000;
       proxy_http_version 1.1;
       proxy_set_header Upgrade $http_upgrade;
       proxy_set_header Connection 'upgrade';
       proxy_set_header Host $host;
       proxy_cache_bypass $http_upgrade;
     }
   }
   ```
   Then: `sudo certbot --nginx -d yourdomain.com -d www.yourdomain.com`

## Every subsequent deploy

```
git pull
npm ci
npx prisma generate
npx prisma migrate deploy
npm run build
pm2 restart kcs
```

**Never delete `prod.db` or `public/uploads/`** — they hold your live content (services, blog posts, reviews, uploaded images), not source code. Back both up regularly (e.g. a nightly cron job copying them off-server).

Do **not** re-run `npm run db:seed` after the first deploy — it's a one-time bootstrap. It's safe to run again (it skips content if rows already exist), but there's no reason to.

## Logging in

Go to `https://yourdomain.com/admin/login` and sign in with the `SEED_OWNER_EMAIL`/`SEED_OWNER_PASSWORD` (or admin) you set in `.env`. Both the Owner and Admin accounts have identical full access. Change your password any time from **Settings** inside the admin panel.
