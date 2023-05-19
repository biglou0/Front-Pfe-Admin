export const RecColumns = [
   
  {
    field: "N° Reclamation",
    headerName: "N° Reclamation",
    width: 160,
    renderCell: (params) => {
      return (
        <div className={`cellWithStatus ${params.row.NumRec}`} 
        >
          {params.row.NumRec}
        </div>
      );
    },
  },

    {
        field: "Titre",
        headerName: "Titre",
        width: 230,
        renderCell: (params) => {
          return (
            <div className="cellWithImg">
        
              {params.row.titre}
            </div>
          );
        },
      },
      
   
  
    {
      field: "Status",
      headerName: "Status",
      width: 160,
      renderCell: (params) => {
        return (
          <div className={`cellWithStatus ${params.row.status}`} 
          >
            {params.row.status}
          </div>
        );
      },
    },

    {
      field: "Agent Name",
      headerName: "Agent Name",
      width: 160,
      renderCell: (params) => {
        return (
          <div className={`cellWithStatus ${params.row.agentName}`} 
          >
            {params.row.agentName}
          </div>
        );
      },
    },
  ];
  
 
  ;
  