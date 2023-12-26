import { Starship } from "@/types/Starship"
type Props = {
    results: Starship[]
}
export const SearchReveal = ({ results }: Props) => {
    return (
        <>
            {
                results.map((result, index) => (
                    <div key={result.name + index} className="my-3 rounded-sm">
                        <p className="text-3xl">{result.name}</p>
                        <p className="text-4xl bg-blue-800 my-5 px-5 py-20 rounded-lg border-2 border-dashed border-blue-300"></p>
                    </div>

                ))
            }
        </>
    )
}