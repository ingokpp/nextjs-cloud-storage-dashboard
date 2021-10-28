const AdvertisementCard = () => {
  return (
    <section className="space-y-3 mt-7 bg-blue-900 rounded-lg p-4">
      <header className="block text-xs text-gray-400">
        Be quick and upgrade
      </header>
      <main>
        <h3 className="text-white">
          Get enough storage space for
          <br /> all your data before it runs out.
        </h3>
      </main>
      <footer>
        <button className="rounded-lg px-2 py-1.5 text-white bg-brand text-sm">
          Upgrade now
        </button>
      </footer>
    </section>
  );
};

export default AdvertisementCard;
