class RecordForm extends React.Component {
	constructor(props, context) {
		super(props, context);
		// I believe this is overwriting the call of handle change to call bind(this) and keep this the same throughout the function
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);

		this.state = {
			title : '',
			date : '',
			amount : ''
		}
	}

	handleChange(e) {
		const name = e.target.name;
		// Refactor [name] instead of [`${name}`]
		this.setState({[name]: e.target.value});
	}

	valid() {
		console.log("valid");
		// return necessary?
		return this.state.title && this.state.date && this.state.amount;
	}

	handleSubmit(e) {
		console.log("handleSumbit")
		e.preventDefault();
		// post params: (url, data, success)
		$.post('', { record: this.state }, (result) => {
			console.log("successful submit")
			this.props.handleNewRecord(result);
			this.setState({
				title: '',
				date: '',
				amount: ''
			})
		});		
	}

	render() {
		return (
			// question: why does handleSubmit not need to be called? And how do we pass in e?
		    <form className="form-inline col-md-12" onSubmit={this.handleSubmit}>
					<div className="form-group">
						<input type="text" className="form-control" placeholder="Date" name="date" value={this.state.date} onChange={this.handleChange} />
					</div>

					<div className="form-group">
						<input type="text" className="form-control" placeholder="Title" name="title" value={this.state.title} onChange={this.handleChange} />
					</div>

					<div className="form-group">
						<input type="text" className="form-control" placeholder="Amount" name="amount" value={this.state.amount} onChange={this.handleChange} />
					</div>

					<input type="submit" className="btn btn-primary" disabled={!this.valid()} value="Create record" />

			</form>
		)
	}
}