import Head from 'next/head';
export default function HeadCustom(props){
    return(
        <>
            <Head>
                <link rel="icon" href={props.linkRel || "/favicon.ico"} />
                <title>{props.title}</title>
            </Head>
        </>
    )
}