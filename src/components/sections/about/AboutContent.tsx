export default function AboutContent() {
  return (
    <div className="flex flex-col gap-6">
      <h2 className="font-heading text-h2 font-bold text-green-normal-active">
        Who We Are
      </h2>
      <div className="flex flex-col gap-4">
        <p className="text-body-1 font-normal text-green-darker">
          Nata Flourish is a Bali-based brand that makes custom comfort furniture
          for villas, restaurants, and hotels. We work with local professional sewers
          to produce pillows, mattresses, bean bags, beach umbrellas, and more —
          each piece made to order based on what you actually need.
        </p>
        <p className="text-body-1 font-normal text-green-darker">
          We keep things simple: good materials, consistent quality, and fair prices.
          If you&apos;re not sure what you need yet, we&apos;re happy to visit your space and
          figure it out together.
        </p>
      </div>
    </div>
  );
}
