import React from 'react';
import './style.scss';

class InfoCard extends React.Component {
  static defaultProps = {
    title: 'database',
    count: '254321',
    description: '',
    form: 'stats',
    icon: 'bullhorn',
    type: '',
    btnType: 'default',
  };

  render() {
    const { form, icon, btnType, type, title, count, description } = this.props;
    const className = `infoCard ${type.length > 0 ? 'infoCard--' + type : ''}`;
    return (
      <div>
        {form === 'stats' && (
          <div className={className}>
            {icon !== false && (
              <span className="infoCard__digit">
                <i className={'icmn-' + icon} />
              </span>
            )}
            <div className="infoCard__desc">
              <span className="infoCard__title">{title}</span>
              <p>{count}</p>
            </div>
          </div>
        )}
        {form === 'stats-large' && (
          <div className={className}>
            <h5 className="text-uppercase mb-3 text-white">{title}</h5>
            <div className="clearfix" />
            <div>
              <span className="pull-right font-size-36">
                <strong>{count}</strong>
              </span>
              {icon !== false && <i className={'font-size-36 icmn-' + icon} />}
            </div>
          </div>
        )}
        {form === 'interactive' && (
          <div className={className + ' infoCard--interactive px-3 py-5'}>
            {icon !== false && (
              <div className="infoCard__icon text-center font-size-30">
                <i className={'icmn-' + icon} />
              </div>
            )}
            <div className="mt-2 text-center">
              <div className="mb-2">
                <p>Lorem Ipsum is simply dummy text of printing the printing and typesetti...</p>
              </div>
              <a href="javascript: void(0);" className={'btn btn-outline-' + btnType}>
                Information
              </a>
            </div>
          </div>
        )}
        {form === 'bordered' && (
          <div className={className + ' infoCard--bordered'}>
            {icon !== false && (
              <span className="infoCard__digit">
                <i className={'icmn-' + icon} />
              </span>
            )}
            <div className="infoCard__desc">
              <span className="infoCard__title">{title}</span>
              <p>{description}</p>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default InfoCard;
