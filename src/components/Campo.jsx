
const Campo = ({iconName, idCampo, placeholderName, tipoCampo}) => {
    return (
      <div className="input-group mb-3">
        <span className="input-group-text">
          <i className={iconName} />
        </span>
        <input
          type={tipoCampo}
          id={idCampo}
          className="form-control"
          placeholder={placeholderName}
        />
      </div>
    );
}
export default Campo