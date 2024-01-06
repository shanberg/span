import { Tabs, RadioButtonGroup, Button, Container } from '~/components/ui'

export default function Home() {
  return (
    <Container py={{ base: '12', md: '16' }} maxW="7xl">
      <Tabs.Root defaultValue="button">
        <Tabs.List>
          <Tabs.Trigger value="button">Button</Tabs.Trigger>
          <Tabs.Trigger value="radio">Radio Group</Tabs.Trigger>
          <Tabs.Trigger value="slider">Slider</Tabs.Trigger>
          <Tabs.Indicator />
        </Tabs.List>
        <Tabs.Content value="button">
          <Button size="md">Hello Park UI</Button>
        </Tabs.Content>
        <Tabs.Content value="radio">
          <RadioButtonGroup.Root defaultValue="react">
            {[{ value: 'S' }, { value: 'M' }, { value: 'L', disabled: true }, { value: 'XL' }].map(
              (option, id) => (
                <RadioButtonGroup.Item key={id} value={option.value} disabled={option.disabled}>
                  <RadioButtonGroup.ItemControl />
                  <RadioButtonGroup.Label>{option.value}</RadioButtonGroup.Label>
                </RadioButtonGroup.Item>
              ),
            )}
          </RadioButtonGroup.Root>
        </Tabs.Content>
        <Tabs.Content value="slider">
        </Tabs.Content>
      </Tabs.Root>
    </Container>
  )
}
