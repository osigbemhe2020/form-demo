const inputClasses = 'h-12 w-full border px-3 rounded-md border-gray-500 focus:outline-none';

const MainForm = () => {
  return (
    <div className="grid gap-8 lg:grid-cols-2">
      {/* ───── Left column ───── */}
      <div>
        <p className="font-semibold mb-2">Personal</p>

        <div className="flex flex-col gap-6">
          {/* First + Last name (stack on mobile, row on md) */}
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex flex-col gap-2 flex-1">
              <label>First name</label>
              <input type="text" name="fname" placeholder="Daniel" className={inputClasses} />
            </div>
            <div className="flex flex-col gap-2 flex-1">
              <label>Surname</label>
              <input type="text" name="sname" placeholder="Okoro" className={inputClasses} />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label>Mobile number</label>
            <input type="number" name="phone" className={inputClasses} />
          </div>

          <div className="flex flex-col gap-2">
            <label>Date of birth</label>
            <input type="text" name="birth" className={inputClasses} />
          </div>

          <div className="flex flex-col gap-2">
            <label>Gender</label>
            <input type="text" name="gender" className={inputClasses} />
          </div>
        </div>
      </div>

      {/* ───── Right column ───── */}
      <div>
        <p className="font-semibold mb-2">Contact</p>

        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <label>E‑mail</label>
            <input type="text" name="email" className={inputClasses} />
          </div>

          <div className="flex flex-col gap-2">
            <label>Phone no.</label>
            <div className="flex flex-col md:flex-row gap-4">
              <input type="text" name="phone-main" className={inputClasses} />
              <input type="text" name="phone-alt" className={inputClasses} />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label>Country</label>
            <input type="text" name="country" className={inputClasses} />
          </div>

          <div className="flex flex-col gap-2">
            <label>Address</label>
            <input type="text" name="address" className={inputClasses} />
          </div>

          <div className="flex flex-col gap-2">
            <label>Years of experience</label>
            <input type="text" name="experience" className={inputClasses} />
          </div>
        </div>
      </div>
    </div>
  );
};


const Details = () => {
  return (
    <section className="max-w-screen-lg w-full mx-auto px-4 overflow-hidden">
      {/* header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8">
        <p className="text-xl sm:text-2xl font-semibold text-[#006A05]">
          My Details
        </p>
        <p className="text-sm text-gray-500 mt-2 sm:mt-0">
          Last update on August
        </p>
      </div>

      {/* form */}
      <form className="w-full space-y-8">
        <MainForm />

        <input
          type="submit"
          value="Submit"
          className="h-12 w-full bg-blue-600 text-white font-medium rounded"
        />
      </form>
    </section>
  );
};

export default Details;

