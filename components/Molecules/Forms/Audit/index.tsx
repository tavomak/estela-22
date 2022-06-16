import { useState, useId } from 'react';
import Button from 'components/Atoms/Button';

type Props = {
  setData: React.MouseEventHandler<HTMLButtonElement>,
}

const FormAudit = ({ setData }: Props) => {
  const inputId = useId();
  const [setup, setSetup] = useState(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    setData(setup);
  };
  const handleChange = (e) => {
    setSetup({
      ...setup,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <form onSubmit={handleSubmit}>
      <h2>Get Free SEO Analysis</h2>
      <p>Ne summo dictas pertinacia nam. Illum cetero vocent ei vim, case regione signiferumque vim te.</p>
      <div className="row g3 align-items-center mb-4">
        <div className="col">
          <input
            type="text"
            name="name"
            placeholder="Nombre"
            onChange={(e) => handleChange(e)}
            className="form-control"
          />
        </div>
        <div className="col">
          <input
            type="text"
            name="email"
            placeholder="Email"
            onChange={(e) => handleChange(e)}
            className="form-control"
          />
        </div>
      </div>
      <div className="row g3 align-items-center mb-4">
        <div className="col">
          <input
            type="text"
            name="url"
            placeholder="Direccion web"
            onChange={(e) => handleChange(e)}
            className="form-control"
          />
        </div>
        <div className="col">
          <div className="form-group">
            <div className="form-check-inline">
              <label htmlFor={`${inputId}-desktop`}>
                <input
                  className="form-check-input"
                  type="radio"
                  name="device"
                  value="desktop"
                  onChange={(e) => handleChange(e)}
                  id={`${inputId}-desktop`}
                  checked
                />
                <span>Desktop</span>
              </label>
            </div>
            <div className="form-check-inline">
              <label htmlFor={`${inputId}-mobile`}>
                <input
                  className="form-check-input"
                  type="radio"
                  name="device"
                  value="mobile"
                  onChange={(e) => handleChange(e)}
                  id={`${inputId}-mobile`}
                />
                <span>Mobile</span>
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className="form-group">
        <Button
          className="btn btn-primary"
          text="Enviar"
          submit
        />
      </div>
    </form>
  );
};

export default FormAudit;
