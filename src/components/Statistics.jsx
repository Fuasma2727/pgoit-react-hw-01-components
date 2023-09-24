import PropTypes from 'prop-types';

export default function Statistics({ title, stats }) {
  return (
    <section style={{justifyContent:'center', alignItems:'center'}}>
      {title && <h2 style={{fontSize:30, marginTop:80}}>{title}</h2>}
      <ul className="statlist" style={{display:'flex', gap:30,paddingLeft:450}}>
        {stats.map(item => (
          <li key={item.id} type={stats} style={{display:'flex', flexDirection:'column', listStyle:'none', alignItems:'center',gap:30}}>
            <span className="label">{item.label}</span>
            <span className="percentage">{item.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired, // Agregamos PropTypes para 'label'
      percentage: PropTypes.number.isRequired, // Agregamos PropTypes para 'percentage' y lo marcamos como requerido
    })
  ),
};