import "./App.css";
import FormularioCadastro from "./components/FormulárioCadastro/FormularioCadastro";
import { Container, Typography } from "@material-ui/core";
import "fontsource-roboto";
import { validarCpf, validarSenha } from "./models/cadastro";
import ValidacoesCadastro from "./contexts/ValidacoesCadastro";

function App() {
  return (
    <Container component="article" maxWidth="sm">
      <Typography variant="h3" component="h1" align="center">
        Formulário de Cadastro
      </Typography>
      <ValidacoesCadastro.Provider
        value={{ cpf: validarCpf, senha: validarSenha, nome: validarSenha }}
      >
        <FormularioCadastro aoEnviar={aoEnviarForm} />
      </ValidacoesCadastro.Provider>
    </Container>
  );
}

function aoEnviarForm(dados) {
  console.log(dados);
}

export default App;
