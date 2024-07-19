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
import RadioControl from './RadioControl';
import CheckboxControl from './CheckboxControl';
import { StyledHeading } from '@/_styled/UI/Heading.styled';
import { StyledButton } from '@/_styled/UI/Button.styled';
import {
  estado_options,
  modelo_options,
  version_options,
  distribuidor_options,
  plazo_options,
} from '@/_dev-data/select-options';
import { FaPhoneAlt } from 'react-icons/fa';
import { BsEnvelopeFill } from 'react-icons/bs';
import Link from 'next/link';

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
        <StyledHeading as="h5" className="forma_contacto">
          Deseo ser Contactado por
        </StyledHeading>
        <StyledAppFormFieldset>
          <StyledAppFormControlsWrapper className="contacto">
            <RadioControl icon={<FaPhoneAlt />} labelText="Teléfono">
              <input
                className="visually-hidden"
                type="radio"
                value="contacto_telefono"
                id="contacto_telefono"
                name="contacto"
                defaultChecked
              />
            </RadioControl>
            <RadioControl icon={<BsEnvelopeFill />} labelText="Email">
              <input
                className="visually-hidden"
                type="radio"
                value="contacto_email"
                id="contacto_email"
                name="contacto"
              />
            </RadioControl>
            <RadioControl labelText="Ambos">
              <input
                className="visually-hidden"
                type="radio"
                value="contacto_ambos"
                id="contacto_ambos"
                name="contacto"
              />
            </RadioControl>
          </StyledAppFormControlsWrapper>
        </StyledAppFormFieldset>
      </StyledAppFormFieldset>
      {/* Ends Datos Personales */}
      {/* Begins Forma de Pago */}
      <StyledAppFormFieldset>
        <StyledAppFormLegend>
          <StyledHeading as="h4">
            <StyledAppFormHeading4Text>Forma de Pago</StyledAppFormHeading4Text>
          </StyledHeading>
        </StyledAppFormLegend>
        <StyledHeading as="h5">Personaliza tu Cotización</StyledHeading>
        <StyledAppFormControlsWrapper className="forma_pago">
          <StyledHeading as="h5" className="tipo_pago_heading">
            Elige Tu tipo de Pago
          </StyledHeading>
          <StyledAppFormControlsWrapper className="tipo_pago">
            <RadioControl labelText="Contado">
              <input
                className="visually-hidden"
                type="radio"
                value="contado"
                id="contado"
                name="tipo_pago_group"
              />
            </RadioControl>
            <RadioControl labelText="Credito">
              <input
                className="visually-hidden"
                type="radio"
                value="credito"
                id="credito"
                name="tipo_pago_group"
                defaultChecked
              />
            </RadioControl>
          </StyledAppFormControlsWrapper>
          <StyledAppFormControlsWrapper className="enganche_plazo">
            <InputControl labelText="Cantidad de Enganche">
              <input
                type="text"
                name="enganche"
                id="enganche"
                placeholder="80,000"
                required
              />
            </InputControl>
            <SelectControl labelText="Plazo">
              <Dropdown id="plazo" options={plazo_options} />
            </SelectControl>
          </StyledAppFormControlsWrapper>
        </StyledAppFormControlsWrapper>
      </StyledAppFormFieldset>
      {/* Ends Forma de Pago */}
      {/* Begins Comentarios */}
      <StyledAppFormFieldset>
        <StyledAppFormLegend>
          <StyledHeading as="h4">
            <StyledAppFormHeading4Text>Comentarios</StyledAppFormHeading4Text>
          </StyledHeading>
        </StyledAppFormLegend>
        <StyledHeading as="h5">Nos Importan Tus Comentarios</StyledHeading>
        <StyledAppFormControlsWrapper>
          <InputControl labelText="¿Dudas? ¿Comentarios?">
            <textarea
              name="comentarios"
              id="comentarios"
              placeholder="Escríbenos"
              required
            ></textarea>
          </InputControl>
        </StyledAppFormControlsWrapper>
      </StyledAppFormFieldset>
      {/* Ends Comentarios */}
      {/* Begins Privacidad */}
      <StyledAppFormFieldset className="privacidad_enviar">
        <StyledAppFormControlsWrapper className="privacidad_promociones">
          <CheckboxControl
            labelText={
              <>
                He leído y acepto el <Link href="#">aviso de privacidad</Link>
              </>
            }
          >
            <input
              type="checkbox"
              name="privacidad"
              id="privacidad"
              className="visually-hidden"
            />
          </CheckboxControl>
          <CheckboxControl labelText="No deseo recibir promociones">
            <input
              type="checkbox"
              name="promociones"
              id="promociones"
              className="visually-hidden"
            />
          </CheckboxControl>
        </StyledAppFormControlsWrapper>
        <StyledButton>Enviar</StyledButton>
      </StyledAppFormFieldset>
      {/* Ends Privacidad */}
    </StyledAppFormTag>
  );
};

export default Form;
