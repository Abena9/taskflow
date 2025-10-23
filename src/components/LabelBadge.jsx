const labelColors = {
  Bug: '#e03131',
  Feature: '#2f9e44',
  Design: '#7048e8',
  Urgent: '#e8590c',
}

function LabelBadge({ label }) {
  return (
    <span className="label-badge" style={{ background: labelColors[label] || '#868e96' }}>
      {label}
    </span>
  )
}

export default LabelBadge
