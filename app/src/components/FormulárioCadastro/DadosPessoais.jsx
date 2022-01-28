import React, { useState, useContext } from "react";
import { Switch, Button, TextField, FormControlLabel } from "@material-ui/core";
import ValidacoesCadastro from './../../contexts/ValidacoesCadastro';
import useErros from './../../hooks/useErros';

function DadosPessoais({ aoEnviar }) {
  const [nome, setNome] = useState("");
  const [sobreNome, setSobreNome] = useState("");
  const [cpf, setCpf] = useState("");
  const [promocoes, setPromocoes] = useState(true);
  const [novidades, setNovidades] = useState(true);
  const validacoes = useContext(ValidacoesCadastro);
  const [erros, validarCampos, possoEnviar] = useErros(validacoes);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if(possoEnviar()) {
          aoEnviar({ nome, sobreNome, cpf, novidades, promocoes });
        }
      }}
    >
      <TextField
        value={nome}
        onChange={(event) => {
          setNome(event.target.value);
        }}
        onBlur={validarCampos}
        error={!erros.nome.valido}
        helperText={erros.nome.texto}
        id="nome"
        name="nome"
        label="Nome"
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <TextField
        value={sobreNome}
        onChange={(event) => {
          setSobreNome(event.target.value);
        }}
        id="sobrenome"
        label="Sobrenome"
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <TextField
        value={cpf}
        onChange={(event) => {
          setCpf(event.target.value);
        }}
        onBlur={validarCampos}
        error={!erros.cpf.valido}
        helperText={erros.cpf.texto}
        id="cpf"
        label="CPF"
        name="cpf"
        variant="outlined"
        margin="normal"
        type="number"
        fullWidth
      />

      <FormControlLabel
        control={
          <Switch
            onChange={(evento) => {
              setPromocoes(evento.target.checked);
            }}
            name="promocoes"
            checked={promocoes}
            color="primary"
          />
        }
        label="Promoções"
      />
      <FormControlLabel
        control={
          <Switch
            onChange={(evento) => {
              setNovidades(evento.target.checked);
            }}
            name="novidades"
            checked={novidades}
            color="primary"
          />
        }
        label="Novidades"
      />

      <Button type="submit" variant="contained" color="primary">
        Próximo
      </Button>

      <Button type="submit" variant="contained" color="primary">
        Voltar
      </Button>
    </form>
  );
}

export default DadosPessoais;
