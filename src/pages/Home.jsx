export default function Home() {
  return (
    <>
      <div className="w-full rounded-sm py-10 px-3">
        <section className="w-full flex items-center border-b-2 h-screen">
          <div className="w-full flex flex-wrap justify-between text-black font-mono">
            <div className="flex w-full sm:w-1/4 rounded-xl p-3 items-center flex-col m-3 border-2">
              <h1 className="font-bold">All Products</h1>
              <p className="m-6">0</p>
            </div>
            <div className="flex w-full sm:w-1/4 rounded-xl p-3 items-center flex-col m-3 border-2">
              <h1 className="font-bold">Active Products</h1>
              <p className="m-6">0</p>
            </div>
            <div className="flex w-full sm:w-1/4 rounded-xl p-3 items-center flex-col m-3 border-2">
              <h1 className="font-bold">Stock Products</h1>
              <p className="m-6">0</p>
            </div>
          </div>
        </section>
        <section className="w-full flex items-center border-b-2 h-screen">
          <div className="w-full flex flex-wrap justify-between text-black font-mono">
            <div className="flex w-full sm:w-1/4 rounded-xl p-3 items-center flex-col m-3 border-2">
              <h1 className="font-bold">All Users</h1>
              <p className="m-6">0</p>
            </div>
            <div className="flex w-full sm:w-1/4 rounded-xl p-3 items-center flex-col m-3 border-2">
              <h1 className="font-bold">Online Users</h1>
              <p className="m-6">0</p>
            </div>
          </div>
        </section>
        <section className="w-full flex items-center border-b-2 h-screen">
          <div className="w-full flex flex-wrap justify-between text-black font-mono">
            <div className="flex w-full sm:w-1/4 rounded-xl p-3 items-center flex-col m-3 border-2">
              <h1 className="font-bold">All Staffs</h1>
              <p className="m-6">0</p>
            </div>
            <div className="flex w-full sm:w-1/4 rounded-xl p-3 items-center flex-col m-3 border-2">
              <h1 className="font-bold">Online Staffs</h1>
              <p className="m-6">0</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
