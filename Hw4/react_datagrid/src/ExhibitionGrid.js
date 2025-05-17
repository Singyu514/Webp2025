import React, { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { TextField, Button, Typography, Box } from "@mui/material";

const rowsPerPage = 10;
const apiUrl =
  "https://cloud.culture.tw/frontsite/trans/SearchShowAction.do?method=doFindTypeJ&category=6";

const ExhibitionGrid = () => {
  const [allData, setAllData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    { field: "title", headerName: "名稱", flex: 1 },
    { field: "location", headerName: "地點", flex: 1 },
    { field: "price", headerName: "標價", flex: 1 },
  ];

  const fetchData = () => {
    setIsLoading(true);
    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => {
        const mapped = data.map((item, index) => ({
          id: index + 1,
          title: item.title,
          location: item.showInfo?.[0]?.location || "無地點",
          price: item.showInfo?.[0]?.price || "免費/無票價資訊",
        }));
        setAllData(mapped);
        setFilteredData(mapped);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSearch = (e) => {
    const keyword = e.target.value.toLowerCase();
    setSearchTerm(keyword);
    const filtered = allData.filter((item) =>
      item.title.toLowerCase().includes(keyword)
    );
    setFilteredData(filtered);
  };

  const handleClear = () => {
    setFilteredData([]);
    setSearchTerm("");
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        景點觀光展覽資訊
      </Typography>

      <TextField
        label="搜尋名稱"
        variant="outlined"
        value={searchTerm}
        onChange={handleSearch}
        sx={{ mb: 2, mr: 2 }}
      />

      <Button variant="contained" color="secondary" onClick={handleClear}>
        清除資料
      </Button>

      <div style={{ height: 600, width: "100%", marginTop: 20 }}>
        <DataGrid
          rows={filteredData}
          columns={columns}
          pageSize={rowsPerPage}
          rowsPerPageOptions={[rowsPerPage]}
          pagination
          loading={isLoading}
        />
      </div>
    </Box>
  );
};

export default ExhibitionGrid;
