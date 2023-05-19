export const ChaufColumns = [
    

    {
        field: "Username",
        headerName: "Username",
        width: 160,
        renderCell: (params) => {
          return (
            <div className="cellWithImg">
         <img className="cellImg" src={params.row.photoAvatar} alt="avatar" />
              {params.row.username}
            </div>
          );
        },
      },
    {
      field: "Nom",
      headerName: "Nom",
      width: 180,
      renderCell: (params) => {
        return (
          <div className="cellWithImg">
            {params.row.Nom}
          </div>
        );
      },
    },
    {
      field: "Prenom",
      headerName: "Prenom",
      width: 180,
      renderCell: (params) => {
        return (
          <div className="cellWithImg">
       
            {params.row.Prenom}
          </div>
        );
      },
    },
    {
      field: "email",
      headerName: "Email",
      width: 200,
    },
  
   
    {
      field: "phone",
      headerName: "phone",
      width: 100,
    },
    {
      field: "Cstatus",
      headerName: "Compte Status",
      width: 120,
      renderCell: (params) => {
        return (
          <div className={`cellWithStatus ${params.row.Cstatus}`} 
          >
            {params.row.Cstatus}
          </div>
        );
      },
    },
    {
      field: "role",
      headerName: "role",
      width: 160,
      renderCell: (params) => {
        return (
          <div className={`cellWithStatus ${params.row.role}`} 
          >
            {params.row.role}
          </div>
        );
      },
    },
  ];
  
  //temporary data
  ;
  