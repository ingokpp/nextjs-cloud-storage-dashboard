const GaugeChart = () => {
  return (
    <div className="border-b mt-7">
      <div className="container">
        <div className="gauge"></div>
        <div className="absolute w-full text-center z-10 top-16 font-bold text-xl text-gray-800">
          <div>112.6 GB</div>
          <div className="text-sm font-semibold text-gray-500">of 150 GB</div>
        </div>
      </div>
    </div>
  );
};

export default GaugeChart;
