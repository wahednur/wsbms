import { useQuery } from "@tanstack/react-query";
import axios from "axios";
const AreaAbdicableFlat = () => {
  const { data: flats = [] } = useQuery({
    queryKey: ["flats"],
    queryFn: async () => {
      const { data } = await axios.get("/flat.json");
      return data;
    },
  });
  return (
    <div className="gird grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {flats.map((flat, idx) => (
        <p key={idx}>{flat.area}</p>
      ))}
    </div>
  );
};

export default AreaAbdicableFlat;
