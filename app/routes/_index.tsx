import type { MetaFunction } from "@remix-run/node";
import { Forms } from "../components/forms";


export const meta: MetaFunction = () => {
  return [
    { title: "Frigade Remix Demo" },
    { name: "description", content: "A simple demo that shows how to use Frigade with Remix" },
  ];
};

export default function Index() {
  return (
    <div className="font-sans p-12">
        <Forms />
    </div>
  );
}
