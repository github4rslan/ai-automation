/** Clean, flat cream backdrop with a very faint dot texture. No gradients. */
export default function Background() {
  return (
    <div className="fixed inset-0 -z-10 bg-cream">
      <div
        className="absolute inset-0 opacity-[0.5]"
        style={{
          backgroundImage: "radial-gradient(rgba(20,20,22,0.05) 1px, transparent 1px)",
          backgroundSize: "26px 26px",
          maskImage:
            "radial-gradient(ellipse 90% 70% at 50% 0%, #000 30%, transparent 80%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 90% 70% at 50% 0%, #000 30%, transparent 80%)",
        }}
      />
    </div>
  );
}
