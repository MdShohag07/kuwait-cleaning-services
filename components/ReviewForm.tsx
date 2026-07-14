"use client";
import { useActionState, useState } from "react";
import { motion } from "framer-motion";
import { useLang } from "@/lib/i18n";
import { submitReview, type ReviewSubmitState } from "@/lib/actions/reviews";
import { Container } from "./Container";

const ease = [0.16, 1, 0.3, 1] as const;

const fieldCls =
  "w-full rounded-[11px] border border-line bg-surface-2 px-4 py-3.5 text-sm transition focus:border-acc focus:bg-acc/5 focus:outline-none";

const Star = ({ filled, onClick, onMouseEnter }: { filled: boolean; onClick: () => void; onMouseEnter: () => void }) => (
  <button
    type="button"
    onClick={onClick}
    onMouseEnter={onMouseEnter}
    className={`text-3xl leading-none transition-transform hover:scale-110 ${filled ? "text-amber" : "text-line"}`}
    aria-label="star"
  >
    ★
  </button>
);

const initialState: ReviewSubmitState = { status: "idle" };

export function ReviewForm() {
  const { t, lang } = useLang();
  const [rating, setRating] = useState(5);
  const [hoverRating, setHoverRating] = useState(0);
  const [state, formAction, pending] = useActionState(submitReview, initialState);

  return (
    <section id="leave-review" className="py-28">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.7, ease }}
          className="mx-auto mb-12 max-w-2xl text-center"
        >
          <span className="mb-5 inline-block text-xs font-semibold uppercase tracking-[0.26em] text-acc">
            {t.reviewForm.eyebrow}
          </span>
          <h2 className="font-serif text-[clamp(2.1rem,4.6vw,3.5rem)] leading-tight tracking-tight text-balance">
            {t.reviewForm.h2a} <em className="italic text-acc">{t.reviewForm.h2b}</em>
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-sm text-muted">{t.reviewForm.sub}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.7, ease, delay: 0.1 }}
          className="mx-auto max-w-xl rounded-[30px] border border-line-soft bg-surface p-9 shadow-card"
        >
          {state.status === "success" ? (
            <div className="py-4 text-center">
              <h3 className="font-serif text-2xl">{t.reviewForm.successTitle}</h3>
              <p className="mx-auto mt-2 max-w-sm text-sm text-muted">{t.reviewForm.successSub}</p>
            </div>
          ) : (
            <form action={formAction}>
              <input type="hidden" name="lang" value={lang} />
              <input type="hidden" name="rating" value={rating} />

              <label className="mb-2 block text-xs text-muted">{t.reviewForm.nameLabel}</label>
              <input
                type="text"
                name="name"
                required
                maxLength={100}
                className={fieldCls}
                placeholder={t.reviewForm.namePlaceholder}
              />

              <label className="mb-2 mt-4 block text-xs text-muted">{t.reviewForm.ratingLabel}</label>
              <div className="flex items-center gap-1" onMouseLeave={() => setHoverRating(0)}>
                {[1, 2, 3, 4, 5].map((n) => (
                  <Star
                    key={n}
                    filled={n <= (hoverRating || rating)}
                    onClick={() => setRating(n)}
                    onMouseEnter={() => setHoverRating(n)}
                  />
                ))}
              </div>

              <label className="mb-2 mt-4 block text-xs text-muted">{t.reviewForm.reviewLabel}</label>
              <textarea
                name="review"
                required
                maxLength={2000}
                className={`${fieldCls} min-h-[110px] resize-y`}
                placeholder={t.reviewForm.reviewPlaceholder}
              />

              {state.status === "error" && state.message && (
                <p className="mt-3 text-sm text-red-600">{state.message}</p>
              )}

              <button
                type="submit"
                disabled={pending}
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-grad px-6 py-3.5 font-semibold text-white shadow-[0_12px_30px_rgba(14,110,78,.26)] transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {pending ? t.reviewForm.submittingBtn : t.reviewForm.submitBtn}
              </button>

              <p className="mt-4 text-center text-xs text-muted-2">{t.reviewForm.note}</p>
            </form>
          )}
        </motion.div>
      </Container>
    </section>
  );
}
