
  const handleClick = (event) => {
    if (!event.target.closest('.help-box-content')) {
      props.closeHelpBox();
    }
  }

  useEffect(() => {
    document.addEventListener('click', handleClick, false);

    return () => {
      document.removeEventListener('click', handleClick, false);
    }
  }, []);
