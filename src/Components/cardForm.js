export function Form({ handleChange, handleSubmit, handleDone, newCard, deck }) {
    return (
        <form onSubmit={handleSubmit}>
            <h2>{deck.name}: Add Card</h2>
            <div className="form-group">
                <label>Front</label>
                <textarea
                    id="front"
                    name="front"
                    className="form-control"
                    onChange={handleChange}
                    type="text"
                    value={newCard.front}
                />
            </div>
            <div className="form-group">
                <label>Back</label>
                <textarea
                    id="back"
                    name="back"
                    className="form-control"
                    onChange={handleChange}
                    type="text"
                    value={newCard.back}
                />
            </div>
            <button
                className="btn btn-secondary mx-1"
                onClick={handleDone}
            >
                Done
            </button>
            <button className="btn btn-primary mx-1" type="submit">
                Save
            </button>
        </form>
    );
}


