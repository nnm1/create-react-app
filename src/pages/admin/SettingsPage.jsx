import React from 'react'

import MyContent from '../../components/layout/MyContent'
import SettingsBlock from '../../components/settings/SettingsBlock'
import SettingsCard from '../../components/settings/SettingsCard'
import SettingsLink from '../../components/settings/SettingsLink'

export default function SettingsPage() {
  const content = (
    <React.Fragment>
      <SettingsBlock header={<h4>Справочники</h4>}>
        <SettingsCard>
          <SettingsLink to="/admin/settings/item1" text="Настройка 1" />
        </SettingsCard>

        <SettingsCard>
          <SettingsLink to="/admin/settings/item2" text="Настройка 2" />
        </SettingsCard>

        <SettingsCard>
          <SettingsLink to="/admin/settings/item3" text="Настройка 3" />
        </SettingsCard>
      </SettingsBlock>

      <SettingsBlock header={<h4>Профиль</h4>}>
        <SettingsCard>
          <SettingsLink to="/admin/settings/profile" text="Профиль" />
        </SettingsCard>

        <SettingsCard>
          <SettingsLink to="/logout" text="Выйти" />
        </SettingsCard>
      </SettingsBlock>
    </React.Fragment>
  )
  return <MyContent header={<h1 className="h2">Настройки</h1>} content={content} />
}
