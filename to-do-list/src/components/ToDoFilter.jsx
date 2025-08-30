export const ToDoFilter = ({statusFilter, setStatusFilter}) => {
    const buttons = [
        {label: 'All', value: null},
        {label: 'Active', value: false},
        {label: 'Completed', value: true}
    ];

    return <>
        <div className='todo__filters'>
            {buttons.map(({label, value}) => (
                <button
                    key={label}
                    className={statusFilter === value ? 'active' : ''}
                    onClick={() => setStatusFilter(value)}
                >
                    {label}
                </button>
            ))}
        </div>
    </>
}