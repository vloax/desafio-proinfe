import React, { useEffect, useState } from 'react';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Button from '@mui/material/Button';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateField } from '@mui/x-date-pickers/DateField';
import dayjs from 'dayjs';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import './Form.css';
import App from '../../src/App';
import { TextField } from '@mui/material';

const Form = () => {
  const verifyForm = () => {
    if (
      items.nome === '' ||
      items.email === '' ||
      items.sexo === '' ||
      items.estado === '' ||
      items.cidade === '' ||
      items.bairro === '' ||
      items.cep === '' ||
      items.rua === '' ||
      items.numero === ''
    )
      setError(true);
    else setError(false);
  };

  const [items, setItem] = React.useState({
    nome: '',
    email: '',
    dataNascimento: Date,
    sexo: '',
    estado: '',
    cidade: '',
    bairro: '',
    cep: '',
    numero: '',
  });

  const [error, setError] = React.useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const [formValues, setFormValues] = useState([]);

  useEffect(() => {
    localStorage.setItem('formValues', JSON.stringify(formValues));
  }, [formValues]);

  const [value, setValue] = React.useState(dayjs(''));

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      );
  };

  window.onload = function () {
    verifyForm();
  };

  const submitForm = () => {
    const localStorageItems = localStorage.getItem('formValues');

    const oldItems = JSON.parse(localStorageItems);
    oldItems.push(items);
    setFormValues(oldItems);

    setItem({
      nome: '',
      email: '',
      dataNascimento: '',
      sexo: '',
      estado: '',
      cidade: '',
      bairro: '',
      cep: '',
      rua: '',
      numero: '',
    });
  };

  return (
    <Container maxWidth="sm">
      <form onSubmit={handleSubmit} className="formPrincipal">
        <h1 style={{ marginTop: 20 }} className="funcionarioTitle">
          Cadsatrar Funcionário
        </h1>
        <TextField
          error={items.nome.length < 5}
          sx={{ width: 600 }}
          label="Nome"
          value={items.nome}
          onChange={(e) => setItem({ ...items, nome: e.target.value })}
          onClick={verifyForm}
        />
        <TextField
          error={!validateEmail(items.email)}
          sx={{ width: 600 }}
          label="Email"
          value={items.email}
          onChange={(e) => setItem({ ...items, email: e.target.value })}
        />
        <TextField
          error={items.dataNascimento === '' || items.dataNascimento === null}
          sx={{ width: 600 }}
          type="date"
          placeholder=""
          value={items.dataNascimento}
          onChange={(e) =>
            setItem({ ...items, dataNascimento: e.target.value })
          }
        />
        <FormControl sx={{ width: 600 }}>
          <InputLabel id="demo-simple-select-label">Sexo</InputLabel>
          <Select
            sx={{ width: 600 }}
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={items.sexo}
            label="sexo"
            onChange={(e) => setItem({ ...items, sexo: e.target.value })}
          >
            <MenuItem value={'Masculino'}>Masculino</MenuItem>
            <MenuItem value={'Feminino'}>Feminino</MenuItem>
          </Select>
        </FormControl>
        <TextField
          error={items.estado === '' || items.estado === undefined}
          sx={{ width: 600 }}
          label="Estado"
          value={items.estado}
          onChange={(e) => setItem({ ...items, estado: e.target.value })}
        />
        <TextField
          error={items.cidade === '' || items.cidade === undefined}
          sx={{ width: 600 }}
          label="Cidade"
          value={items.cidade}
          onChange={(e) => setItem({ ...items, cidade: e.target.value })}
        />
        <TextField
          error={items.bairro < 3}
          sx={{ width: 600 }}
          label="Bairro"
          value={items.bairro}
          onChange={(e) => setItem({ ...items, bairro: e.target.value })}
        />
        <TextField
          error={items.cep === '' || items.cep === undefined}
          sx={{ width: 600 }}
          label="CEP"
          value={items.cep}
          onChange={(e) => setItem({ ...items, cep: e.target.value })}
          onMouseLeave={verifyForm}
        />{' '}
        <TextField
          error={items.rua === '' || items.rua === undefined}
          sx={{ width: 600 }}
          label="Rua"
          value={items.rua}
          onChange={(e) => setItem({ ...items, rua: e.target.value })}
          onMouseLeave={verifyForm}
        />
        <TextField
          error={items.numero < 0 || items.numero === ''}
          sx={{ width: 600 }}
          label="Número"
          value={items.numero}
          type="number"
          onChange={(e) => setItem({ ...items, numero: e.target.value })}
          onClick={verifyForm}
          onMouseLeave={verifyForm}
        />
        <Button
          disabled={error}
          type="submit"
          onClick={submitForm}
          sx={{ width: 600, marginBottom: 4 }}
          variant="contained"
        >
          Cadastrar Funcionário
        </Button>
      </form>
    </Container>
  );
};

export default Form;
