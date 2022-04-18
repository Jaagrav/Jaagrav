import { SubHeader } from "../../components";
import { useForm, ValidationError } from "@formspree/react";
import Head from "next/head";

export default function Contact() {
  const [state, handleSubmit] = useForm("mwkyravz");
  if (state.succeeded) {
    return <ThankYouMessage />;
  }
  return (
    <div className="h-fit w-full overflow-hidden">
      <Head>
        <title>Contact / Jaagrav</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <SubHeader
        title="Contact Me"
        caption="You got some shit to say? Feel free to reach out to me, I’ll respond whenever I want, and please don't send me bullshit if you're planning to, and if you're a recruiter, then keep going..."
      />
      <div className="px-10 md:px-24 relative z-10">
        <div className="max-w-screen-xl mx-auto">
          <form onSubmit={handleSubmit} className="bg-bgSecondaryColor p-12">
            <label htmlFor="email" className="block text-white text-3xl">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              name="email"
              className="block w-full text-white text-xl p-6 outline-none bg-transparent border-2 border-white my-6"
              placeholder="For e.g. jaagravseal03@gmail.com"
              spellCheck={false}
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
              className="block text-white text-xl bg-bgColor px-12 py-6 mb-6"
            />
            <label htmlFor="message" className="block text-white text-3xl">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Type a message for e.g. You're hired! We can pay you whatever you want."
              className="h-96 block w-full text-white text-xl p-6 outline-none bg-transparent border-2 border-white my-6"
            />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
            <button
              type="submit"
              disabled={state.submitting}
              className="inline-block mt-4 w-full md:w-fit text-center md:text-left md:mr-4 px-8 py-2 text-bgColor text-xl border-white border-2 bg-white"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

function ThankYouMessage() {
  return (
    <div className="h-fit w-full overflow-hidden">
      <SubHeader
        title="Contact Me"
        caption="You got some shit to say? Feel free to reach out to me, I’ll respond whenever I want, and please don't send me bullshit if you're planning to, and if you're a recruiter, then keep going..."
      />
      <div className="px-10 md:px-24 relative z-10">
        <div className="max-w-screen-xl mx-auto">
          <div className="bg-bgSecondaryColor p-12 text-center">
            <h1 className="text-white text-6xl ">
              Thank <span className="text-border">you!</span>
            </h1>
            <div className="text-xl text-white mt-6 max-w-prose mx-auto">
              I've received your message, if I don't respond, I might be
              ignoring you, so expect to receive a response soon.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}