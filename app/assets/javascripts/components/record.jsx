class Record extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(e){
    e.preventDefault();
    // no $.delete shortcut
    $.ajax({
      method: "DELETE",
      // how does this record have access to this?
      url: `/records/${this.props.record.id}`,
      // is this necessary?
      dataType: "JSON",
      success: (result) => {
        this.props.handleDeleteRecord(this.props.record);
      }
    });
  }

  render() {
    return (
      <tr>
        <td>{this.props.record.date}</td>
        <td>{this.props.record.title}</td>
        <td>{amountFormat(this.props.record.amount)}</td>
        <td><a href="#" className="btn btn-danger" onClick={this.handleDelete}>Delete</a></td>
      </tr>
    )
  }
}