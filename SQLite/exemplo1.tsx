// Um exemplo de como usar o banco de dados com uma linha

  // Carregar do banco sempre que a tela ganhar foco
  useFocusEffect(
    useCallback(() => {
      carregarCanula();
    }, [])
  );

  // Carrega os valores do banco nos useStates
  const carregarCanula = async () => {
    const rows = await getCanula();
    if (Array.isArray(rows) && rows.length > 0) {
    const row = rows[0];
    setTipo(row?.tipo != null ? String(row.tipo) : "");
    setBalao(row?.balao != null ? String(row.balao) : "0");
    setMaterial(row?.material != null ? String(row.material) : "0");
    setTamanho(row?.tamanho != null ? String(row.tamanho) : "");
    setMarca(row?.marca != null ? String(row.marca) : "");
    setData(row?.data ? dataParaDate(row.data) : null);
    }
  };

  // Salva novos atributos no DB 
  const mudarCanula = async () => {
    await setCanula("tamanho", tamanho);
    await setCanula("marca", marca);
    await setCanula("data", dateParaData(data));
    await setCanula("tipo", tipo);
    await setCanula("material", material);
    await setCanula("balao", balao);
    
    await carregarCanula();
  };
