
const HostCTA = () => {
  return (
    <section className="bg-white py-24 px-6 text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-bold mb-6 text-black leading-tight">
          Ready to Welcome Your First Guest?
        </h2>
        <p className="text-gray-500 text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
          Join a trusted hosting community built on respect, safety, and long-term stays.
        </p>
        <button className="bg-[#F97316] text-white px-12 py-4 rounded-xl font-bold text-xl hover:bg-[#ea580c] transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1">
          List Your Room
        </button>
      </div>
    </section>
  );
};

export default HostCTA;
