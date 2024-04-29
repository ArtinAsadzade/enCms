export default function MessagesComps(props) {
  return (
    <>
      <div className="flex flex-nowrap mb-4 p-3 rounded-lg shadow-md bg-white">
        <h1 className="mx-3">
          <span className="font-bold">From:</span> {props.from}
        </h1>
        <p className="mx-3">
          <span className="font-bold">Message:</span> {props.message}
        </p>
      </div>
    </>
  );
}
