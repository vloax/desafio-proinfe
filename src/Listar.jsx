import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import '../public/css/style.css';

export default function Listar() {
  const funcionarios = JSON.parse(localStorage.getItem('formValues'));

  console.log(funcionarios);

  return (
    <section style={{ margin: '0 auto' }}>
      <h1 className="tituloTeste">Listar Funcionários</h1>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 500 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="left">Nome</TableCell>
              <TableCell align="left">E-mail</TableCell>
              <TableCell align="left">Data de Nascimento</TableCell>
              <TableCell align="left">Sexo</TableCell>
              <TableCell align="left">Estado</TableCell>
              <TableCell align="left">Cidade</TableCell>
              <TableCell align="left">Bairro</TableCell>
              <TableCell align="left">Cep</TableCell>
              <TableCell align="left">Rua</TableCell>
              <TableCell align="left">Número</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {funcionarios.map((row, index) => (
              <TableRow
                key={index}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell align="left" component="th" scope="row">
                  {row.nome}
                </TableCell>
                <TableCell align="left">{row.email}</TableCell>
                <TableCell align="left">{row.dataNascimento}</TableCell>
                <TableCell align="left">{row.sexo}</TableCell>
                <TableCell align="left">{row.estado}</TableCell>
                <TableCell align="left">{row.cidade}</TableCell>
                <TableCell align="left">{row.bairro}</TableCell>
                <TableCell align="left">{row.cep}</TableCell>
                <TableCell align="left">{row.rua}</TableCell>
                <TableCell align="left">{row.numero}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </section>
  );
}
