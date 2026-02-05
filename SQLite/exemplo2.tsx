// Um exemplo de como usar o banco de dados com múltiplas linhas

  // Carregar do banco sempre que a tela ganhar foco
  useFocusEffect(
    useCallback(() => {
      carregarAgenda();
    }, [])
  );

  // Carrega os valores do banco nos useStates
  const carregarAgenda = async () => {
    const rows = await getAgenda();
    if (Array.isArray(rows)) {
      setRegistros(rows);
    }
  };

  // Salva novo registro no DB
  const salvarRegistro = async () => {

  await novoRegistro(dateParaData(data), dateParaHora(hora), atividadeTrim, obsTrim, notificacao, checked);   

  carregarAgenda();
}

  // Muda o registro no DB
  const mudarRegistro = async () => {
  
    await setAgenda("atividade", atividadeTrim, id);
    await setAgenda("data", dateParaData(data), id);
    await setAgenda("hora", dateParaHora(hora), id);
    await setAgenda("obs", obsTrim, id);
    await setAgenda("notificacao", notificacao, id);
    await setAgenda("aviso", checked, id);

    carregarAgenda();
  };

  // Deleta o registro
  const deletarRegistro = async () => {

    await deletarRegistroDB(id);
    carregarAgenda();
  };
