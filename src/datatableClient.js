export const ClientColumns = [
    { field: "id", headerName: "ID", width: 70 },

    {
        field: "Username",
        headerName: "Username",
        width: 230,
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
      width: 230,
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
      width: 230,
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
      width: 230,
    },
  
   
    {
      field: "phone",
      headerName: "phone",
      width: 100,
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
  