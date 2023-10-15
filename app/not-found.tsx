export default function NotFound() {
    return (
        <section className="flex flex-1 flex-col items-center justify-center gap-4">
            <h2>
                <span className="text-h2 after:mx-2 after:content-['|']">404</span>
                <span className="text-body">Not found</span>
            </h2>

            <p>Could not find requested resource</p>
        </section>
    )
}
