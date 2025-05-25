
import { getModelById } from "@/app/lib/models"
import type { ModelDetailPageProps } from "@/app/types"
export default async function ModelDetailPage({params}: ModelDetailPageProps){
    const {id} = await params
    const model =await getModelById(id)
    return <h1 className="text-center bg-red-300">The i of the model is {model.name}</h1>
}
