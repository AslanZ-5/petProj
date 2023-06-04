# WebStoreCRM

Привет, поздравляю с переходом на этап учебного проекта!
На данном этапе мы будем учиться работать и коммуницировать в команде во время разработки ПО.

**Вы должны быть максимально самостоятельными или как минимум к этому стремиться!**

**Общайтесь с коллегами (в том числе и с бекенд-командой). Обсуждайте проблемы, делитесь опытом!**
**На проекте вы должны быть максимально самостоятельными и самодостаточной боевой единицей команды!**

Полезные ссылки:

Макет  - https://www.figma.com/file/tWbPmporTclwA6sdPmra2l/Pet-Clinic?node-id=0%3A1&t=Ntcy4rG6SzMLJjBa-0

[Документация по API](http://91.241.64.154:8080/swagger-ui/index.html?configUrl=/v3/api-docs/swagger-config) (Swagger поддерживается командой бэкенда)

[Документация gitlab](https://docs.gitlab.com/ee/README.html)

------------

### Немного о проекте
Проект - Вет Паспорт, в котором можно вести учет здоровья, вакцин, приемов и прочего прочего для питомцев пользователей. Также развивается функционал форума, отзывов о докторах, админка.

### Стек технологий
- React
- Redux / RTK Query
- Typescript
- Formik + Yup
- CSS Modules + SCSS
* При необходимости и желании вы можете подключить какую-либо библиотеку в процессе выполнения какой-нибудь задачи. Главное, чтоб в проекте не было подключений однотипных библиотек, чтоб не засорять и нагружать проект.

Скорее всего, вы еще не работали с Redux Toolkit и Typescript.
Обязательно нужно изучить эти технологии:
- [Необходимый минимум по Redux Toolkit и Typescript](https://gitlab.com/Kristina_mentor_fe/veterinary-clinic-app-one/-/blob/main/USEFUL_MATERIALS.md)

### Как мы работаем
Мы используем GitLab в качестве системы управления версиями.

[Код проекта](https://gitlab.com/Kristina_mentor_fe/veterinary-clinic-app-one) 

Кроме того, мы используем GitLab и для управления задачами. Для этого у нас есть [доска](https://gitlab.com/Kristina_mentor_fe/veterinary-clinic-app-one/-/boards) задач

- Колонка "Open" - общий список задач

- Колонка "To do" - задачи, которые закреплены за определенными разработчиками и поставлены в выполнение.

- Колонка "In progress" - задачи над которыми в данный момент кто-то работает

- Колонка "Need First Review" - задачи выполненые, должны проверяться двумя студентами. После каждой проверки необходимо поставить лайк или дизлайк. Если задача выполненна не верно, то необходимо пренести её в In Progress. Задача должна набрать 2 лайка, для переноса в "Need Review".

- Колонка "Need mentor's review" - задачи выполненые, проверенные, ожидают ревью ментора.

- Колонка "Paused" - задачи на паузе по тем или иным причинам невозможности выполнить в данный момент времени.

- Колонка "Closed" - задачи выполненые и прошедшие ревью.

Если есть необходимость в реализации функционала или исправление работы уже существующего на стороне сервера - опишите суть и как видите работу со стороны клиента, и отправьте это в чат бекенд-команде ... . Вопросы, которые касаются бекенда, адресуем так же в чат бекенд-команде.

Для того, чтобы начать работать, необходимо:

1. Найти назначенную задачу на доске задач.
Открытая задача должна находиться в колонке To do и не иметь Assignee (Assignee - исполнитель).
2. Добавиться в Assignee задачи
3. Перенести задачу в колонку "Doing"
4. Зайти в задачу и найти кнопку "Create merge request".
Нажать стрелочку справа от этой кнопки и выбрать пункт "Create merge request and branch".
Выбрать название для ветки и нажать "Create merge request".
5. Переключиться на эту ветку локально и начать разработку
6. Выполнить задачу, запушить изменения в созданную ветку,
   зайти в ранее созданный Merge Request и нажать кнопку Mark as ready в его шапке
7. Перенести задачу в колонку "Need Review"
8. Написать об этом в общий чат и запросить ревью коллеги
9. Ожидать проверки MR, параллельно работая над другими задачами. После проверки внести правки

После того, как всё будет исправлено, ваш MR будет вмержен в main, а задача перенесена в "Closed"

Не забывайте часто коммитить и пушить в процессе разработки, чтобы не потерять свои изменения.

Задача должна пройти ревью двух коллег из вашей команды и ревью лида. Кидайте в общий чат ссылку на карточку, которая требует ревью и сообщение о том, что задача ожидает ревью.

При проведении ревью - делитесь опытом и давайте советы коллеге, от вас не требуется "забраковать" задачу.

После того, как всё будет исправлено, ваш MR будет вмержен в main, а задача перенесена в "Closed"

Если задачу по какой-то причине невозможно выполнить, перенесите ее в колонку "Paused"
и **обязательно** напишите комментарий к задаче в карточке, в котором объясните причину, по которой
задача оказалась в этой колонке.

Если есть понимание того, чего не хватает на клиенте и по этой задаче нет карточки на доске - уведомите об этом лида и, при необходимости, создайте карточку сами.

### Работа с git

Мы используем [git-flow](https://nvie.com/posts/a-successful-git-branching-model/).
Отводим ветку от `main`, решаем задачу, кидаем Merge Request в main.

### Как коммитить в репозиторий?

[Атомарно](https://sashasushko.tumblr.com/post/174690191358/good-commit).

Один коммит - одно изменение.

Один Merge Request - одна задача.

Это два строгих правила, избегая которые можно превратить разработку в хаос.

Ветку создаём с префиксом номера карточки задачи (если создаёте через кнопку "Create merge request and branch" - префикс уже будет вписан заранее).

Пример: для задачи "#123 - добавить кнопку логина" ветка будет примерно следующая `123-add-login-button`

Где `123-` - это префикс номера карточки

Коммиты пишем так же с префиксом и в повелительном наклонении (что сделать)

Пример: `SP-123: Add login button for registration form`

Где `SP` - это префикс проекта

`123` - префикс задачи

Полезные ссылки по работе в команде:

- https://www.conventionalcommits.org/en/v1.0.0/#summary
- https://chris.beams.io/posts/git-commit/
- https://www.atlassian.com/ru/git/tutorials/comparing-workflows/gitflow-workflow

### Структура проекта

../src/

> __shared/__
>
> Изолированные компоненты общего назначения (кнопки, блоки, и т. д.), с запретом импорта из других частей приложения.

> __layout/__
>
> Компоненты без логики, определяющие позиционирование/отображение компонентов внутри себя и адаптацию под разные размеры экрана; ограничения на импорт те же, что и для `shared`.

> __view/__
>
> Компоненты-представления («страницы»), используемые в маршрутизации приложения.

> __widgets/__
>
> Самостоятельные и полноценные блоки страницы с конкретными действиями; обычно компоненты с данными, получаемыми с Backend’а.
---
> __features/__
>
> Бизнес-логика: функционал взаимодействия пользователя с приложением, то бишь подход Redux Toolkit.

> __services/__
>
> Либо самописные классы с асинхронным API (DTO), либо прослойка RTK Query.
---
> __utils/__
>
> Служебный API, то бишь глобальные функции, классы и константы: fetch-обёртки, форматировщики текста…

> __hooks/__
>
> Предназначенные для многократного использования нестандартные хуки React: `useRequest`, `useInterval`…

> __types/__
>
> Глобальные типы TypeScript (*а локальные типы помещаются непосредственно в компоненты*).

> (__typings/__)
>
> Типизация библиотек при необходимости.

> __styles/__
>
> Глобальные стили, CSS-переменные для всего приложения.
---
> __assets/__
>
> Разного рода ресурсы, не являющиеся исполняемым кодом (svg-иконки, изображения, шрифты и т. п.).
---
> __app/__
>
> Входная точка приложения: компонент App, маршруты, инициализирующая логика (store, например), настройки приложения.


### `shared`
	../src/shared/
		Block/
			Block.tsx
				(export function Block(…) { … })
			Block.module.scss
		Checkbox/
			Checkbox.tsx
				(export function Checkbox(…) { … })
			Checkbox.module.scss
		index.ts
			(export { Block } from './Block/Block')
			(export { Checkbox } from './Checkbox/Checkbox')
		
	// import { Block, Checkbox } from '../shared/index'

UI-библиотека проекта, что-то наподобие AntD или Material UI, но собственного производства: кнопки, переключатели (toggle, checkbox…) и т. п.
Обязательно изолированные: могут использоваться в любом контексте, так как не содержат никакую бизнес-логику.

	/// Интерфейсный блок размером не более 600x365 px
	<Block constraints={{ w: 600, h: 365 }}>(…)</Block>

> В TSX подключаются в основном только инструменты React и, возможно, некоторые глобальные модули вроде *uuidv4* (*да-да, которые вообще-то должны быть в React по умолчанию*). Импорт из других частей приложения (например, *../src/layout/*) нарушает принцип независимого компонента.
>
> В SCSS используются глобальные CSS-переменные проекта (*../src/styles/variables.css*) и/или, при необходимости, локальные SCSS-переменные (для удобства перенастройки внешнего вида) в случаях, когда компоненту предоставляется собственная палитра цветов, не зависящая от внешних настроек темы (к примеру, когда компонент должен выглядеть одинаково в светлой и тёмной темах приложения или не менять внешний вид в зависимости от цветов темы приложения).
>
> [ВАЖНО] Когда используете глобальные переменные в таких компонентах, обязательно указывайте fallback-значение (значение в случае отсутствия указанной переменной)!

	// например, подсветить красным, если цвет отсутствует
	var(--normal-color, red);

*Fig. 1 — Компонент, независящий от глобальных настроек темы*


### `layout`
	../src/layout/
		Align/
			Align.tsx
				(export function Align(…) { … })
			(Align.module.scss)
		index.ts
			(export { Align } from './Align/Align')
	
	// import { Align } from '../layout/index'

Компоненты-обёртки (high-order components).

Как и `shared`, тоже изолированные и независимые, но не относятся к видимым пользователю представлениям: они лишь меняют положение вложенных в них компонентов.

Меняют представление (например, центрируют или отрисовывают компонент в зависимости от выделенного пространства).

	<Align.BottomRight>(…)</Align.BottomRight>

	<MatchMediaWrapper query='(max-width: 768px)'>
		<HeaderMobile />
		<HeaderDesktop />
	</MatchMediaWrapper>
> Благодаря таким компонентам-прослойкам можно избавиться от однотипной вёрстки, добавляя абстракции для часто используемых вещей.

Можно сюда кидать анимационные плюшки, кстати. Например, обернуть в условный `Animation` компонент, чтобы тот плавно появлялся на странице при вмонтировании (*onMount*).

	<Animation duration={750} type='fade-in'>(…)</Animation>

### `view`
	../src/view/
		ForumPage.tsx
			(export function ForumPage(…) { … })
		PrivateRoute.tsx (?)
		UserEditPage.tsx
		UserLoginPage.tsx
		index.ts
			(export { ForumPage } from './ForumPage')
			(export { PrivateRoute } from './PrivateRoute')
			(…)
	
	// import { PrivateRoute, ForumPage, UserEditPage, UserLoginPage } from '../view/index'

Получают данные маршрутизации (location). Логику не содержат, только виджеты.

По сути просто обёртки, отрисовывающие своё содержимое по указанному адресу (маршруту). Никакими вычислениями не обременены.

Ещё сюда можно положить `PrivateRoute`, перенаправляющий пользователя на другой адрес при определённом условии.

	<PrivateRoute path='/register' redirect={!isLoggedIn}>(view-компонент)</PrivateRoute>

### `widgets`
[
	Вариант первый: одинаковое название папки, файла и компонента.
	`ForumWidget` → `../src/widgets/ForumWidget/ForumWidget`
]: #
	../src/widgets/
		ForumWidget/
			ForumWidget.tsx
				(import ForumWidgetTopic from './ForumWidgetTopic')
				(export function ForumWidget(…) { … })
			ForumWidget.module.scss
			(ForumWidget.test.ts)
			ForumWidgetTopic.tsx
				(export default function ForumWidgetTopic(…) { … })
			ForumWidgetTopic.module.scss
		index.ts
			(export { ForumWidget } from './ForumWidget/ForumWidget')

	// import { ForumWidget } from '../widgets/index'

[В импортах повторяется название, и это не очень хорошо. Если название компонента будет длинным, его придётся прописывать дважды, а длина строки сильно увеличится: `../src/widgets/SomeComponentWithLongName/SomeComponentWithLongName`.]: #

[
	Вариант второй: путь на основе названия виджета.
	`ForumWidget` → `../src/widgets/Forum/Widget`
]: #
[
	../src/widgets/
		Forum/
			Widget.tsx
				(import ForumWidgetTopic from './ForumWidgetTopic')
				(export function ForumWidget(…) { … })
			Widget.module.scss
			(Widget.test.ts)
			WidgetTopic.tsx
				(export default function ForumWidgetTopic(…) { … })
			WidgetTopic.module.scss
		index.ts
			(export { ForumWidget } from './Forum/Widget')
	// import { ForumWidget } from '../widgets/index'
]: #
[Позволяет удобно строить более сложные структуры. Недостаток способа — затруднение программного поиска по названию файла, поскольку в каждой директории лежит одноимённый файл *Widget.tsx*; однако это не мешает поиску по названию директории: `Forum`.
]: #

[`DashboardFrameGraphWidget` → `../src/widgets/Dashboard/Frame/Graph/Widget`]: #
[
	Dashboard/
		Widget.tsx
			(export function DashboardWidget(…) { … })
		Frame/
			Widget.tsx
				(export function DashboardFrameWidget(…) { … })
			Graph/
				Widget.tsx
					(export function DashboardFrameGraphWidget(…) { … })
	// import { DashboardFrameGraphWidget } from '../widgets/Dashboard/Frame/Graph/Widget'
]: #

Обычно содержат callback-функции (actions, а тут и *dispatch()*), реализуют бизнес-логику (features).
В связке с RTK Query подписываются на запросы/мутации: use*Запрос*Query()/use*Запрос*Mutation().
Сюда пихается loading-состояние, поскольку здесь работаем с запросами.

	export function UserCardWidget(…) {
		const [loading, error, result] = useRequest(…);
		(…)
		return (
			<Block header='My Flawless Widget' constraints={{ h: 400 }}>
				{loading && <LoadingSpinner /> || (содержимое)}
			</Block>
		);
	}

	<UserCardWidget />

> Предпочтительна декомпозиция на составляющие (при необходимости): например, если делается форум, можно вынести тему форума (topic) в отдельный компонент, чтобы не перегружать главный. Актуально, когда логика становится слишком сложной, чтобы держать её в одном месте.

*Fig. 2 — В каких случаях желательна разбивка компонента на более мелкие части (англ.)*

### `features`
	../src/features/
		authSlice.ts
		orderSlice.ts

	// import { makeOrder, cancelOrder, getCurrentOrder } from '../features/orderSlice'

Кусочки (slices) глобального store: бизнес-логика. Всё, что лежит «под капотом» приложения.

Непосредственная работа со store. Управление памятью приложения. Наши любимые *createSlice()* от Redux Toolkit.

### `services`
#### *Использование RTK Query.*
	../src/services/
		authAPI.ts
			(export const { useRegisterMutation, useLoginMutation } = authAPI)
		forumAPI.ts

	// import { useRegisterMutation, useLoginMutation } from '../services/authAPI'

### `utils`
	../src/utils/
		constants.ts
		isValidHttpURL.ts
			(export default function isValidHttpURL(…) { … })

Примеры говорят сами за себя. Можно их использовать где угодно. Функции, классы, enum’ы, константы. По сути изолированные, внеконтекстные.

	/// Пишем везде, где используются изображения, чтобы обработать ошибку загрузки картинки
	export const imgFallback = (event: React.InvalidEvent<HTMLImageElement>) => event.target.src = '../favicon.ico';

	/// Формат дат и времени. А почему бы и нет?
	export const dateFormat = new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

	/// Для форм: валидация введённого URL-адреса
	export default function isValidHttpURL(input: string): boolean {
		try {
			const url = new URL(input);
			return url.protocol == 'http:' || url.protocol == 'https:';
		} catch {
			return false;  
		}
	}

### `styles`
	../src/styles/
		global.scss
		variables.css
		index.scss (только импорты: `normalize`, шрифты и т. п.)
			(@import "~normalize.css")
			(@import "./variables.css")
			(@import "./global.scss")
			(…)

### `assets`
	../src/assets/
		fonts/
			Inter-Regular.ttf
			Inter-SemiBold.ttf
			Inter.css
				(@font-face { … })

	// @import "../assets/fonts/Inter.css";

### `app`
	../src/app/
		App.tsx
			(export default function App() { … })
		routes.tsx (или запись напрямую в `App.tsx`)
		store.ts
		(…)

## Именование
Именовать папки с компонентами в `PascalCase`.

В нашем проекте (на практике) именуется по-всякому, и было бы неплохо прийти к чему-то одному.

	../src/shared/PrettyCheckbox/
		PrettyCheckbox.tsx
			(export function PrettyCheckbox(…) { … })
		PrettyCheckbox.module.scss

> Название папки с компонентом, имя файла и функции должны точно совпадать.

Для остального именовать в `camelCase`.
