import React from "react";

import { useState } from "react";
import emailjs from "@emailjs/browser";

const initialFormData = {
  name: "",
  email: "",
  phone: "",
  enquiryType: "repair",
  course: "",
  message: "",
};

const courses = ["Android Mobile Repairing", "Apple iPhone Repairing"];

function Contact() {
  const [formData, setFormData] = useState(initialFormData);
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState("");
  const [reviewMessage, setReviewMessage] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");
  const [submitStatus, setSubmitStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
      ...(name === "enquiryType" && value !== "course" ? { course: "" } : {}),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isSending) return;

    setIsSending(true);
    setSubmitMessage("");
    setSubmitStatus("");

    const enquiryLabel =
      formData.enquiryType === "course" ? "Training Course" : "Mobile Repair";

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          customer_name: formData.name.trim(),
          customer_email: formData.email.trim(),
          customer_phone: formData.phone.trim() || "Not provided",
          enquiry_type: enquiryLabel,
          course:
            formData.enquiryType === "course"
              ? formData.course
              : "Not applicable",
          message: formData.message.trim(),
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      );

      setSubmitStatus("success");
      setSubmitMessage(
        "Your enquiry has been sent successfully! The MOBDOC team will contact you soon.",
      );

      setFormData(initialFormData);
    } catch (error) {
      //  catch (error) {
      //   console.error("EmailJS error:", error);

      //   setSubmitStatus("error");
      //   setSubmitMessage(
      //     "Sorry, your enquiry could not be sent. Please try again.",
      //   );
      // }
      console.error("EmailJS error:", error);
      console.error("Error status:", error?.status);
      console.error("Error details:", error?.text);

      setSubmitStatus("error");
      setSubmitMessage(
        `Email failed: ${error?.text || error?.message || "Unknown error. Check the browser console."}`,
      );
    } finally {
      setIsSending(false);
    }
  };

  const handleReviewSubmit = (e) => {
    e.preventDefault();

    if (!rating || !review.trim()) {
      setReviewMessage("Please select a star rating and write a review.");
      return;
    }

    // This is a local acknowledgement, not a published or saved review.
    setReviewMessage("Thank you for sharing your feedback with MOBDOC!");
    setRating(0);
    setReview("");
  };

  const inputClasses =
    "w-full rounded-xl border border-white/10 bg-[#080D0C] px-4 py-3 text-sm text-white outline-none transition placeholder:text-gray-500 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500";

  const labelClasses = "mb-2 block text-sm font-medium text-gray-300";

  return (
    <main className="min-h-screen overflow-hidden bg-[#080D0C] text-white">
      {/* Hero */}
      <section className="relative px-4 pb-14 pt-20 sm:px-6 sm:pb-20 sm:pt-28 lg:px-8">
        <div className="pointer-events-none absolute left-1/2 top-0 -z-0 h-72 w-72 -translate-x-1/2 rounded-full bg-emerald-500/10 blur-[100px]" />

        <div className="relative mx-auto max-w-6xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400 sm:text-sm">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            Contact MOBDOC
          </span>

          <h1 className="mx-auto mt-6 max-w-4xl text-3xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Let's Get Your Device
            <span className="block text-emerald-400">Back to Life.</span>
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-400 sm:text-base">
            Need a mobile repair or want to learn mobile repairing? Tell us what
            you need. We're here to help you take the next step.
          </p>

          <a
            href="#enquiry-form"
            className="mt-8 inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-500 px-6 py-3 font-semibold text-[#080D0C] transition hover:bg-emerald-400"
          >
            Send an Enquiry
          </a>
        </div>
      </section>

      {/* Contact details and form */}
      <section className="px-4 pb-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-12">
          {/* Left information panel */}
          <aside className="flex flex-col gap-5">
            <div className="rounded-2xl border border-white/10 bg-[#0D1512] p-6 sm:p-8">
              <span className="text-sm font-semibold uppercase tracking-wider text-emerald-400">
                We're here to help
              </span>

              <h2 className="mt-3 text-2xl font-bold sm:text-3xl">
                How can we help you today?
              </h2>

              <p className="mt-4 text-sm leading-7 text-gray-400">
                From mobile repair services to practical training for Android
                and iPhone devices, send us your requirements and we'll help you
                find the right option.
              </p>

              <div className="mt-7 space-y-5">
                <div className="flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-emerald-500/20 bg-emerald-500/10 text-xl text-emerald-400">
                    <span aria-hidden="true">⌕</span>
                  </div>
                  <div>
                    <h3 className="font-semibold">Mobile Repair</h3>
                    <p className="mt-1 text-sm leading-6 text-gray-400">
                      Enquire about diagnosing and repairing your mobile device.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-emerald-500/20 bg-emerald-500/10 text-xl text-emerald-400">
                    <span aria-hidden="true">✳</span>
                  </div>
                  <div>
                    <h3 className="font-semibold">Training Courses</h3>
                    <p className="mt-1 text-sm leading-6 text-gray-400">
                      Ask about learning Android or iPhone repairing through
                      practical training.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-emerald-500/20 bg-emerald-500/10 text-xl text-emerald-400">
                    <span aria-hidden="true">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold">Quick & Easy Enquiry</h3>

                    <p className="mt-1 text-sm leading-6 text-gray-400">
                      Tell us what you're looking for, and we'll help you find
                      the right solution.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/[0.06] p-6">
              <p className="text-sm font-medium text-emerald-400">
                Have a question?
              </p>
              <p className="mt-2 text-sm leading-6 text-gray-300">
                Fill in the enquiry form with your details and we'll prepare a
                message you can send directly through WhatsApp.
              </p>
            </div>
          </aside>

          {/* Enquiry form */}
          <div
            id="enquiry-form"
            className="rounded-2xl border border-white/10 bg-[#0D1512] p-5 sm:p-8 lg:p-10"
          >
            <div className="mb-8">
              <p className="text-sm font-semibold uppercase tracking-wider text-emerald-400">
                Get in touch
              </p>
              <h2 className="mt-2 text-2xl font-bold sm:text-3xl">
                Send Us an Enquiry
              </h2>
              <p className="mt-3 text-sm leading-6 text-gray-400">
                Complete the form below. Fields marked as required must be
                filled in.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className={labelClasses}>
                    Full Name *
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    maxLength={100}
                    required
                    className={inputClasses}
                  />
                </div>

                <div>
                  <label htmlFor="email" className={labelClasses}>
                    Email Address *
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    maxLength={254}
                    required
                    className={inputClasses}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="phone" className={labelClasses}>
                  Phone Number (Optional)
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter your contact number"
                  maxLength={20}
                  className={inputClasses}
                />
              </div>

              <div>
                <label htmlFor="enquiryType" className={labelClasses}>
                  What are you interested in? *
                </label>
                <select
                  id="enquiryType"
                  name="enquiryType"
                  value={formData.enquiryType}
                  onChange={handleChange}
                  required
                  className={inputClasses}
                >
                  <option value="repair">Mobile Repair</option>
                  <option value="course">Training Course</option>
                </select>
              </div>

              {formData.enquiryType === "course" && (
                <div>
                  <label htmlFor="course" className={labelClasses}>
                    Select Training Course *
                  </label>
                  <select
                    id="course"
                    name="course"
                    value={formData.course}
                    onChange={handleChange}
                    required
                    className={inputClasses}
                  >
                    <option value="">Choose a course</option>
                    {courses.map((course) => (
                      <option key={course} value={course}>
                        {course}
                      </option>
                    ))}
                  </select>
                </div>
              )}

              <div>
                <label htmlFor="message" className={labelClasses}>
                  Your Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder={
                    formData.enquiryType === "course"
                      ? "Tell us what you'd like to learn..."
                      : "Describe your mobile repair requirement..."
                  }
                  rows={4}
                  maxLength={1500}
                  required
                  className={`${inputClasses} resize-y`}
                />
              </div>

              <p className="text-xs leading-5 text-gray-500">
                Your enquiry will be sent securely to the MOBDOC team by email.
              </p>
              {submitMessage && (
                <p
                  role="status"
                  aria-live="polite"
                  className={`rounded-xl border p-4 text-sm leading-6 ${
                    submitStatus === "success"
                      ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-400"
                      : "border-red-500/30 bg-red-500/10 text-red-500"
                  }`}
                >
                  {submitMessage}
                </p>
              )}
              <button
                type="submit"
                disabled={isSending}
                className="flex w-full items-center justify-center gap-3 rounded-xl bg-emerald-500 px-6 py-3.5 font-semibold text-[#080D0C] transition hover:bg-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 focus:ring-offset-[#0D1512] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isSending ? "Sending Enquiry..." : "Submit"}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Customer review section */}
      <section className="border-t border-white/10 bg-[#0A100E] px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-400">
              Your feedback matters
            </p>
            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
              Had an Experience with MOBDOC?
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-7 text-gray-400 sm:text-base">
              Whether you've visited us for a mobile repair or attended a
              training course, we'd love to hear your feedback. Your suggestions
              help us improve.
            </p>
          </div>

          <form
            onSubmit={handleReviewSubmit}
            className="rounded-2xl border border-white/10 bg-[#0D1512] p-6 sm:p-8"
          >
            <label className="block text-sm font-medium text-gray-300">
              Rate your experience
            </label>

            <div
              className="mt-3 flex gap-2"
              role="group"
              aria-label="Choose a star rating"
            >
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  aria-label={`${star} star${star > 1 ? "s" : ""}`}
                  aria-pressed={rating === star}
                  onClick={() => {
                    setRating(star);
                    setReviewMessage("");
                  }}
                  className={`text-3xl transition hover:scale-110 ${
                    star <= rating ? "text-emerald-400" : "text-gray-600"
                  }`}
                >
                  ★
                </button>
              ))}
            </div>

            <div className="mt-6">
              <label htmlFor="review" className={labelClasses}>
                Your Feedback
              </label>
              <textarea
                id="review"
                value={review}
                onChange={(e) => {
                  setReview(e.target.value);
                  setReviewMessage("");
                }}
                placeholder="Share your experience with us..."
                rows={4}
                maxLength={1000}
                required
                className={`${inputClasses} resize-y`}
              />
            </div>

            {reviewMessage && (
              <p role="status" className="mt-4 text-sm text-emerald-400">
                {reviewMessage}
              </p>
            )}

            <button
              type="submit"
              className="mt-5 w-full rounded-xl border border-emerald-500/40 px-6 py-3 font-semibold text-emerald-400 transition hover:bg-emerald-500/10"
            >
              Submit Feedback
            </button>

            <p className="mt-4 text-xs leading-5 text-gray-500">
              Demo feedback form: reviews are not saved or published. Connect a
              storage service to collect feedback permanently.
            </p>
          </form>
        </div>
      </section>
    </main>
  );
}

export default Contact;
