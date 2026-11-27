
function Card({ icon: Icon, title, description }) {
  return (
    <div className="bg-white p-8 rounded-xl shadow-lg text-center hover:-translate-y-2 transition duration-300">

      {/* Icon */}
      <div className="flex justify-center mb-5">
        <Icon size={65} strokeWidth={2} className="text-red-500" />
      </div>

      {/* Title */}
      <h2 className="text-2xl font-bold mb-4">
        {title}
      </h2>

      {/* Description */}
      <p className="text-gray-600 leading-8">
        {description}
      </p>

    </div>
  );
}

export default Card;
