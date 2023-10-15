export default function NotFound() {
    return (
        <section className="items-center flex flex-1 flex-col justify-center gap-4">
            <h2>
                <span className="after:content-['|'] after:mx-2 text-h2">404</span>
                <span className="text-body">Not found</span>
            </h2>

            <p>Could not find requested resource</p>
        </section>
    )
}
