/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `npm run dev` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `npm run deploy` to publish your worker
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */

export interface Env {
	// Example binding to KV. Learn more at https://developers.cloudflare.com/workers/runtime-apis/kv/
	MY_KV_NAMESPACE: "fce7ed1dff654189b040368f60632d2f";
	//
	// Example binding to Durable Object. Learn more at https://developers.cloudflare.com/workers/runtime-apis/durable-objects/
	// MY_DURABLE_OBJECT: DurableObjectNamespace;
	//
	// Example binding to R2. Learn more at https://developers.cloudflare.com/workers/runtime-apis/r2/
	// MY_BUCKET: R2Bucket;
	//
	// Example binding to a Service. Learn more at https://developers.cloudflare.com/workers/runtime-apis/service-bindings/
	// MY_SERVICE: Fetcher;
	//
	// Example binding to a Queue. Learn more at https://developers.cloudflare.com/queues/javascript-apis/
	// MY_QUEUE: Queue;
}
import {Md5} from 'ts-md5';

interface RequestData{
	url: string,
	time: string
}
export default {
	async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
		if(request.method == "POST"){
			
			//hashing the url
			const requestData :RequestData = await request.json();
			const url = requestData.url;
			const hashString = md5hasing(url)

			//storing in kv
		
			//return
			return new Response(JSON.stringify({"hashedString": hashString}), {
				headers:{
					"content-type": "application/json;charset=UTF-8",
				}
			})
		}
		return new Response('Hello World!');
	},
};

function md5hasing(url : string): string{
	const timeInMillis = new Date().getTime()
	const randomNumber = getRandomInt(100000000000,1000000000000);
	const finalString = url+timeInMillis.toString()+randomNumber.toString()
	const hashString = Md5.hashStr(finalString)
	return hashString.slice(0,7);
}

function getRandomInt(min: number, max: number): number {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function storeInKV(hash: string){

}
  