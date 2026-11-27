import React from "react";

function FormComponent(props) {
  const {
    firstName,
    lastName,
    age,
    gender,
    destination,
    nutsFree,
    lactoseFree,
    vegan,
  } = props.data;

  return (
    <main className="min-h-screen bg-gray-100 font-sans">
      {/* En-tête */}
      <header className="bg-[#332f2c] px-6 py-4 text-white">
        <h1 className="text-3xl font-bold">Sample form</h1>
      </header>

      {/* Formulaire */}
      <form className="flex flex-col gap-4 bg-[#e0b07d] p-6">
        <input
          type="text"
          name="firstName"
          value={firstName}
          onChange={props.handleChange}
          placeholder="First Name"
          className="w-full max-w-xl rounded border border-gray-500 bg-white px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-teal-700"
        />

        <input
          type="text"
          name="lastName"
          value={lastName}
          onChange={props.handleChange}
          placeholder="Last Name"
          className="w-full max-w-xl rounded border border-gray-500 bg-white px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-teal-700"
        />

        <input
          type="text"
          name="age"
          value={age}
          onChange={props.handleChange}
          placeholder="Age"
          className="w-full max-w-xl rounded border border-gray-500 bg-white px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-teal-700"
        />

        {/* Boutons Radio */}
        <div className="flex flex-col gap-1 text-sm">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="gender"
              value="male"
              checked={gender === "male"}
              onChange={props.handleChange}
            />
            Male
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="gender"
              value="female"
              checked={gender === "female"}
              onChange={props.handleChange}
            />
            Female
          </label>
        </div>

        {/* Select Destination */}
        <div className="flex flex-col items-start gap-1">
          <label htmlFor="destination" className="text-sm font-bold">
            Select your destination
          </label>
          <select
            id="destination"
            name="destination"
            value={destination}
            onChange={props.handleChange}
            className="rounded border border-gray-500 bg-white px-2 py-1 text-sm"
          >
            <option value="">-- Please Choose a destination --</option>
            <option value="Japan">Japan</option>
            <option value="Thailand">Thailand</option>
            <option value="Brazil">Brazil</option>
            <option value="Norway">Norway</option>
          </select>
        </div>

        {/* Checkboxes */}
        <div className="flex flex-col gap-1 text-sm">
          <p className="font-bold">Dietary restrictions:</p>
          <label className="ml-3 flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              name="nutsFree"
              checked={nutsFree}
              onChange={props.handleChange}
            />
            Nuts free
          </label>
          <label className="ml-3 flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              name="lactoseFree"
              checked={lactoseFree}
              onChange={props.handleChange}
            />
            Lactose free
          </label>
          <label className="ml-3 flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              name="vegan"
              checked={vegan}
              onChange={props.handleChange}
            />
            Vegan
          </label>
        </div>

        <button
          type="submit"
          className="mt-2 w-24 cursor-pointer rounded border border-gray-500 bg-gray-100 py-1.5 text-sm font-bold hover:bg-gray-200 active:bg-gray-300"
        >
          Submit
        </button>
      </form>

      <hr className="my-2 border-gray-300" />

      {/* Résultat affiché en temps réel */}
      <section className="bg-[#015958] p-6 text-white">
        <h2 className="mb-4 text-2xl font-bold">Entered information:</h2>
        <div className="space-y-3 text-sm italic">
          <p>
            Your name: {firstName} {lastName}
          </p>
          <p>Your age: {age}</p>
          <p>Your gender: {gender}</p>
          <p>Your destination: {destination}</p>
          <p>Your dietary restrictions:</p>
        </div>
        <div className="mt-2 ml-4 space-y-1 text-sm not-italic">
          <p>**Nuts free : {nutsFree ? "Yes" : "No"}</p>
          <p>**Lactose free : {lactoseFree ? "Yes" : "No"}</p>
          <p>**Vegan meal : {vegan ? "Yes" : "No"}</p>
        </div>
      </section>
    </main>
  );
}

export default FormComponent;