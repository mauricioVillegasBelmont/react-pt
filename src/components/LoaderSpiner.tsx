
export default function LoaderSpiner() {
  return(
    <div className="position-absolute top-0 bottom-0 start-0 end-0 m-auto">
      <div className="spinner-border" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );

}
