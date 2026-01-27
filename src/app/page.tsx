"use client";

export default function Test() {
  async function handleClick() {}

  return (
    <section className="grid min-h-dvh w-full place-items-center">
      <div>
        <button onClick={handleClick}>Click me </button>
      </div>
    </section>
  );
}
