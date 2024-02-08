import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function Serivces() {
  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": {
          m: 1,
        },
        maxWidth: "50%",
        margin: "2% auto",
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          required
          id="outlined-required"
          label="Required"
          fullWidth
          defaultValue="Hello World"
        />
        <TextField
          disabled
          fullWidth
          id="outlined-disabled"
          label="Disabled"
          defaultValue="Hello World"
        />
        <TextField
          id="outlined-read-only-input"
          label="Read Only"
          fullWidth
          defaultValue="Hello World"
          InputProps={{
            readOnly: true,
          }}
        />
        <TextField
          fullWidth
          id="outlined-number"
          label="Number"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          id="outlined-search"
          label="Search field"
          type="search"
          fullWidth
        />
        <TextField
          fullWidth
          id="outlined-helperText"
          label="Helper text"
          defaultValue="Default Value"
          helperText="Some important text"
        />
      </div>
      <div>
        <TextField
          required
          id="filled-required"
          label="Required"
          defaultValue="Hello World"
          fullWidth
          variant="filled"
        />
        <TextField
          disabled
          id="filled-disabled"
          label="Disabled"
          fullWidth
          defaultValue="Hello World"
          variant="filled"
        />
        <TextField
          id="filled-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          variant="filled"
          fullWidth
        />
        <TextField
          id="filled-read-only-input"
          label="Read Only"
          defaultValue="Hello World"
          fullWidth
          InputProps={{
            readOnly: true,
          }}
          variant="filled"
        />
        <TextField
          id="filled-number"
          label="Number"
          type="number"
          fullWidth
          InputLabelProps={{
            shrink: true,
          }}
          variant="filled"
        />
        <TextField
          id="filled-search"
          label="Search field"
          type="search"
          variant="filled"
          fullWidth
        />
        <TextField
          fullWidth
          id="filled-helperText"
          label="Helper text"
          defaultValue="Default Value"
          helperText="Some important text"
          variant="filled"
        />
      </div>
      <div>
        <TextField
          fullWidth
          required
          id="standard-required"
          label="Required"
          defaultValue="Hello World"
          variant="standard"
        />
      
      </div>
    </Box>
  );
}
