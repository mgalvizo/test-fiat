import {
  StyledAppFormTag,
  StyledAppFormFieldset,
  StyledAppFormLegend,
  StyledAppFormControlsWrapper,
  StyledAppFormHeading4Text,
} from '@/_styled/Pages/App/Form.styled';
import InputControl from '@/_components/Form/InputControl';
import SelectControl from '@/_components/Form/SelectControl';
import Dropdown from '@/_components/Form/Dropdown';
import { StyledHeading } from '@/_styled/UI/Heading.styled';
import {
  estado_options,
  modelo_options,
  version_options,
  distribuidor_options,
} from '@/_dev-data/select-options';

const Form = () => {
  return (
    <StyledAppFormTag>
      {/* Begins datos fiat */}
      <StyledAppFormFieldset>
        <StyledAppFormControlsWrapper className="datos_fiat">
          <SelectControl labelText="Modelo">
            <Dropdown id="modelo" options={modelo_options} />
          </SelectControl>
          <SelectControl labelText="Versión">
            <Dropdown id="version" options={version_options} />
          </SelectControl>
          <SelectControl labelText="Estado">
            <Dropdown id="estado" options={estado_options} />
          </SelectControl>
          <SelectControl labelText="Distribuidor">
            <Dropdown id="distribuidor" options={distribuidor_options} />
          </SelectControl>
        </StyledAppFormControlsWrapper>
      </StyledAppFormFieldset>
      {/* Ends datos fiat */}
      {/* Begins Datos Personales */}
      <StyledAppFormFieldset>
        <StyledAppFormLegend>
          <StyledHeading as="h4">
            <StyledAppFormHeading4Text>
              Datos personales
            </StyledAppFormHeading4Text>
          </StyledHeading>
        </StyledAppFormLegend>
        <StyledHeading as="h5">Escribe tus Datos Personales</StyledHeading>
        <StyledAppFormControlsWrapper className="datos_personales">
          <InputControl labelText="Nombre (s)">
            <input
              type="text"
              name="nombres"
              id="nombres"
              placeholder="ej. juan"
              required
            />
          </InputControl>
          <InputControl labelText="Apellido Paterno">
            <input
              type="text"
              name="apellido_paterno"
              id="apellido_paterno"
              placeholder="ej. lópez"
              required
            />
          </InputControl>
          <InputControl labelText="Apellido Materno">
            <input
              type="text"
              name="apellido_materno"
              id="apellido_materno"
              placeholder="ej. tovar"
              required
            />
          </InputControl>
          <InputControl labelText="Email">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="tu@email.com"
              required
            />
          </InputControl>
          <InputControl labelText="Teléfono">
            <input
              type="tel"
              name="telefono"
              id="telefono"
              placeholder="01.844.439.06"
              required
            />
          </InputControl>
        </StyledAppFormControlsWrapper>
      </StyledAppFormFieldset>
      {/* Ends Datos Personales */}
    </StyledAppFormTag>
  );
};

export default Form;
