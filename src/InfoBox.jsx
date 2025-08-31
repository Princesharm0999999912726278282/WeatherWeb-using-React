import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

export default function InfoBox({info}) {
  let url =
    "https://images.unsplash.com/photo-1579003593419-98f949b9398f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
  
  return (
    <div>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia sx={{ height: 140 }} image={url} title="green iguana" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {info.city}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }} component={"span"}>
            <p>Temperature= {info.temp}&deg;C</p>
            <p>Humidity= {info.humidity}</p>
            <p>Min-Temperature= {info.tempMin}&deg;C</p>
            <p>Max-Temperature= {info.tempMax}&deg;C</p>
            <p>The Weather can be Described as {info.weather} and feels like {info.feelsLike}&deg;C</p>
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
