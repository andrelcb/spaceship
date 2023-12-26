import { Starship } from "@/types/Starship"
type Props = {
    results: Starship[]
}
export const SearchReveal = ({ results }: Props) => {
    return (
        <>
            {
                results.map((result, index) => (
                    <div key={result.name + index} className="my-3 p-5 bg-gray-900 rounded-lg">
                        <p className="text-4xl">{result.name}</p>
                        <p className="text-3xl bg-blue-800 my-5 px-5 py-10 rounded-lg border-2 border-dashed border-blue-300">
                            Paradas exigidas: {result.required_stop}
                        </p>
                    </div>

                ))
            }
        </>
    )
}