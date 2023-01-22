import React from "react";

const header1 = () => {
  return (
    <nav class="navbar bg-body-tertiary">
      <div class="container-fluid">
        <ul>
          <img
            src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxIPEhMQEBAQFRUVEBIVFRAWFxUYFxcYFhUXFxUSFRYYHyghGB0lHRUVITUiJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGxAQGi8gICUtLS0tLS0rNS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tK//AABEIAOEA4QMBIgACEQEDEQH/xAAcAAEAAwEBAQEBAAAAAAAAAAAABQYHBAEDAgj/xABEEAACAQECBBEKBgIDAQAAAAAAAQIDBBEFBhIhBzEyMzRBUVJTYXFykqGxstEUFRYic3SBkaLBExdCQ9PhYtIjgvCj/8QAGgEBAAMBAQEAAAAAAAAAAAAAAAMEBQECBv/EADgRAAIBAwAFCAoCAgMBAAAAAAABAgMEERIxM1GBBRMhQWFxkbEUFRYiMjSSocHwQuEj0VKC8ST/2gAMAwEAAhEDEQA/ANxAAAAAAAAAAAAAAAAAAB8q9aME5Skopacm0kuVsrtrx+wbSd0rZTb/AMFOp1wTR1JvUjy5Ja2WcFTs+iJgybu8rUX/AJwqRXxbjcvmWKxW6lXjl0akKkd9CSkvmg4ta0FOMtTOoAHD0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACo47Y6UsGxUUvxK8lfCjfckt/N7S4tN/NqVxpwzGwWapaJZ8mPqx303mjH4vqvP5xt9sqWmrOtVk5VKkr5Pdb0klubSXEWbehzjy9RVua/NrC1nbh3GG02+WVaaspZ71T0qcebBZly6ZFEnZsESlnm8ni2/wCjuhgqktNN8rf2NWMMLCRlvMnlleOvB2Ea1ln+JZ6s6ct9B3X8TWlJcTJaWC6T/S1yN+Jy2jA+3CXwfidccrDOJNdKNTxD0RFa5Rs9ryYVnmhUWaFXiu/TPi0ntbhoiZ/Kk4ODuacWmnuNbjRvWhpjM8IWa6pK+tRuhU3ZLPkVPik0+NMy7m3UPejqNK1uHP3Zay5AAqF0AAAAAAAAAAAAAAAAAAHjZ6ReMmFY2OzVrRL9uDaW7J5oR+MmkMN6jjaSyyt4Z0S7HZK9SzzhaZypyyZShGm433Z0nKaea+7S00zj/N+w8DbehS/kMXq1ZTlKc3fKUnKUt2Une382z8mmrKGOsy3e1M9GDavzfsPA23oUv5B+b9h4G29Cl/IYqDvoVPeznptTsNq/N+w8DbehS/kH5v2Hgbb0KX8hioHoVPex6bU7C8aIuOlPCkaFKzxrRhCU5TVRRTlJpRhdkyeknPpENg6wqmr3qn1cSODAtDKk5PSj2snSzSpqEcIilNzelIH4nUjHVSS5WkR+E8IZHqQ1W29zi5SFlJt3ttvdZJk8ZLVCtGWplF8jR+yokpg3CTTUKjvTzKT01y8QyEyTtdljVVz09qW5/QxIw+sFWt1KsZuDpyhOELm3pOEkpNJ50tvSbPuRWHLPfFVFprM+R6XX2nmpTU4tM9Rk4vSRqX5v2Hgbb0KX8g/N+w8DbehS/kMUPSp6FT3sm9NqdhtX5v2Hgbb0KX8g/N+w8DbehS/kMVA9Cp72PTanYbV+b9h4G29Cl/IfuzaLFhqThD8O1xypxjlyjTyVlNLKk1N3JX7hiR40c9Ch2nfTanYf1cmelX0PcNeW2KlOTvqQX4VTdyoZsp8qyZfEtBmyTTaZpxlpJMAA4egAAAAAAZ7ouRc6NGjlOMZ1ZSldt5CWSuS+TfwRoRQNFbU2bnVeyBNbLNWJBcbN/vWZV5mjv5dQ8zR38uokj03MGRhEZ5mjv5dQ8zR38uokwMDCIzzNHfy6jzzNHfy6iUAwMI+FjsqpJxTbvd975D7gHTpGzwRGTbc5Xtt7W2eeZY7+XUSYOaKOYIzzLHfy6jzzLHfy6iUAwMI/NONySvvuSV+7ceV6SnFxek1cfsA6RfmaO/l1HvmaO/l1EmBg5hEZ5mjv5dQ8zR38uokwMDCIzzNHfy6h5mjv5dRJgYGEW3QhpujVr0lNuMqcZ5LuzSjJRvXwl1I1QzDQt2TV93ffiaeY13tma1rskAAViwAAAAAACgaK2ps3Oq9kC/lA0VtTZudV7IFi120f3qZDcbN8PNGelxxMxWoW2jOpVdVNVXFZMkldkxe2nusppp+hdsap7d9yBo3cnGnmLwULWKlPDPLViDZIQnJSr3qEmvWjtK/emYI3rCGtVPZz7rMFiRWM5SzpPOr8kl3CMcYWD9HVgizRrV6VKV+TOrCLu07pSSdxykhi5suz+8Uu+i5UeIt9jKsfiRoP5eWTfWjpR/1KhjrgOlYalOFJzalTcnlNN333ZrkjXjNNFLX6PsX3jLtas5VEm2aFxThGDwil01e0t1rtNR/L2yb60dKP+pl9HVR5y7Tfia9qSi1ovGsitIRknlZM+w9iHTp0ZTszqyqR9bIk08qK1SVyWfc5LtsoB/QDRleP2AfJ6n49OP8Ax1JO9bUZvO1xJ6a+Jy0uW3oTfcduaCS0o8Spkhi/Yo2i00qM8rJnJp3O56lvM/gR5MYm7Ns/tH3JF6q2oNrcVILMkXn8vLJvrR04/wCpSsccEU7FaFSpObi6UZes03e5SW0luI2QyvRO2ZH3eHfmZ1pVnKrhtsvXNOEYZSKkzTLDiFZZ04Tcq98oRk7pR02k3+kzORu+CtZpeyp91Et7OUdHReCK0hGTeVkzzHLFahYqEatJ1XJ1Yx9aSaucZPaS3EUw1HRO2JD3iHcmZcS2cnKnmTz0kdzFRnhFy0Ltk1fd334mnmYaF2yavu778TTyhd7Zly12SAAKxZAAAAAABQNFbU2bnVeyBfygaK2ps3Oq9kCxa7aP71MhuNm+HmjPDT9C7Y1T277kDMTTdC7Y1T277kS/fbLiUbPaFqwjrVT2c+6zBkb1hDWqns591mCoh5P1S4fklvdcT9Eji7sqz+8Uu8iOJDF3ZVn94pd9F6p8D7mU4/EjcGZpopa/R9i+8aWZpopa/R9i+8ZFntVxNO62bKZR1Uecu032JgVHVR5y7TfkWL/XHiQ2Wp8D8OSvuzbvy0+1fM58JWGFopTo1FfGaue7xNbjTzlax/wjOyuy1qenGrPNtSWSsqL4mvHaLJgu3wtNKFWm74yjfxp7cXuNPMUnCSip9TLamnJwMXwxg2dlrTo1NOLzS2pRepmuXtTR24m7Ns/tH3JGgY8YA8ro5cF/y003H/JbdP7rj5TP8TdnWf2j7kjThW5yi3146fAzp0ubqJdXV4mzmV6J2zI+7w78zUzLNE7Zkfd4d+ZTstqu4t3ez4lSkbvgrWaXsqfdRhEjd8FazS9lT7qJ+UP48SGy1yK1onbEh7xDuTMuNR0TtiQ94h3JmXEtjsuJHd7QuWhdsmr7u+/E08zDQu2TV93ffiaeUrvbMtWuyQABWLIAAAAAAKBoramzc6r2QL+UDRW1Nm51XsgWLXbR/epkNxs3w80Z6jTdC7Y1T277kTMkaDoWWtXVqN+fKjUS3U1kvsj8y/erNJlC0f8AkRd8Ia1U9nPuswaJv04Xpp7auMPw1g2VkrToyT9VvJe+h+mS+HXeQWElmSJ72L6GcR34u7Ks/vFLvIjyy4hYLlXtUal3qUXlye1lfojy35/gX60lGm29xTprM0jXTM9FLX6PsX3jSkZTokWpTteQnrdKMXyu+TXycTJsl/lRo3TxTZWaOqjzl2m+GBUdVHnLtN9Jr/XHiRWWqRRNFTUUPaT7qITEPD/k1X8Go/8AiqtaelCekpcj0n8Ca0VtRZ+fU7EZ2TW1NTt9FkdeThW0kf0A85SrfgH8HCNntNNepUqvLS/TNwk7+SXbyo6MQcYPKaf4FR31aSzN6c4aSlxtaT+D2y2tXme9KjJx4F73asU+J+jKtE7Zkfd4d+ZqlxleidsyPu8O/Mlstqu5kV1sypSN3wVrNL2VPuowiRu+CtZpeyp91E/KH8eJDZa5Fa0TtiQ94h3JmXGo6J2xIe8Q7kzLiWx2XEju9oXLQu2TV93ffiaeZhoXbJq+7vvxNPKV3tmWrXZIAArFkAAAAAAFA0VtTZudV7IF/KBoramzc6r2QLFrto/vUyG42b4eaM8O/AmFJWStGtDPdmlHfRenH/22kcB6bMoqSwzJi2sNG54LwjTtNONWlLKi/mntxktprcPlhbAtC1xUa0FK7Uy0pR5JIx7BWFq1knl0ZuLzXx04y4pLbLvYNEaDSVejOL25Qakvk7musyqlpUpvMOnu1mjC5hNYn/R2w0PbKne512t65R7VG8sthsNOzwVOlCMIraXa3tvjZXXogWO797kyP7IfCeiI2mrNRue/qNZuSMfE8OlXqPEk33npVKMOlY4Fpxlw/TsVPKk05tNU6e23uvcittmO2ivKpKU5u+UpOUnutu9n7tlrnWm6lWcpyenJ9nEuJHxNG3t1SW9spV6zqPsP1R1Uecu030wKErmnuNM0j8x7PwFo/wDn/sQXtKc2tFZ1ktrUjBPSeD46Kuos/PqdkTOyz444y07eqSp06kchyby8nPelpXN7hWCe1i4U0pIiuJKVRtHRg23Ts9SFam7pRd/E1txfE1mNpwPhKFqpQrU9KSzrbi1pxfGjDiwYo4yOwTkpKUqU1ngrr1JaUo3u7if9Hi7oc4tKOtHq2q6Dw9TNgZleidsyPu8O/Mn/AMx7PwFo/wDn/sU7G7DMLbXVanGcUqUYXSuvvUpO/M3vkVrSjUjUzJYJ7irCUMJkIzdsFazS9lT7qMKZotj0QaFOnCDo124wjFtZF2ZJZvW4ia9pyno6KyRWs4wzpM7NE7YkPeIdyZlxb8bsbKVuoxpU6dWLVRTvlk3XKMldmb3SoElnCUKeJLHSeLmSlPKLloXbJq+7vvxNPMw0Ltk1fd334mnlC72zLlrskAAViyAAAAAACgaKzzWbnVeyBfyqY8YMjaFSy3JZLqXXXbeTuriCuIW7VWpqWvyPE6UqsdCOtmUHpbPRilv6n0+A9GKW/qfT4E3tFY739JX9U3C6l4lTBbPRilv6n0+A9GKW/qfT4D2ist7+keqrjcvEqYLZ6MUt/U+nwHoxS39T6fAe0djvl9I9VXG5eJUwWz0Ypb+p9PgPRilv6n0+A9orLe/pHqq43LxKmeFt9GKW/qfT4D0Ypb+p9PgPaKx3v6R6quNy8SpgtnoxS39T6fAejFLf1Pp8DntFY739I9VXG5eJUwWz0Ypb+p9PgPRilv6n0+B32ist7+keqrjcvEqZ4W30Ypb+p9PgPRilv6n0+A9orHe/pHqq43LxKmC2ejFLf1Pp8B6MUt/U+nwHtFY739I9VXG5eJUwWz0Ypb+p9PgPRilv6nzj4D2isd8vpHqq43LxProW7Jq+7vvwNQKTiXgiFnrTlCU23Saz3b6L2lxF2IpXVO5bq09TLFOjKjHQnrAAOHsAAAAAAEDjL+3yz+xPEDjL+3yz+xR5S+Wlw8ya32q/eogzw9PtY7LKrJRj8XuLdPk4QlOWjFZbNeUlFZZ8Ty8tVmwZSgl6uU92Wf8ApHU7NB5siPyRsQ5GqNe9JJ92SnK+itSKWCzWvA9OS9RZD4tL4rwK7WpOEnGSuaKNzZVbf4ulb0T0q8amrXuPmensIOTSSvbdyRYLDgWMVfU9Z7m0vE821pUuJYguJ2rWjT1leBc42eC0oQXwR8LRgylP9CT3Y5n1GhLkWaXuzTKyvluKkDrwhYJUXnzxelL7PjOQyalOVOTjJYaLkJKSyj0FmwdZKcqUG6cG3FXtxREYbpxjVujFJZCdyVy2y7X5PlSpKq5Z1dHeQ07nTno4I89PDrwXBSqwTSabd6edallKnDTko7yactFNnKeFtr2GkoyapU9S/wBK3Cplm7snbYy85IqNfnM9GMHgAKZOS+LmuS5j7UWQreLmuS5j7UWQ+q5K+WXezJutqwADRK4AAAAAAIHGX9vln9ieIHGX9vln9ijyl8tLh5k1vtV+9RBk7i3FXTe3el8LiCO3BVt/Bln1LzPi3GfO8n1Y068ZT1eXaaNzByptImMO15QgsnNfK5tbWbqK9CtJO9Sae7ey3wcakb80ov4o46mB6MtJNcj+xsXtlVrz5ynPo7/yU6FeFNYkiKlhurkpXRv25bfyI+rVlN3ybb3WSlswJKOem8pbjzP4bpFNGTdu5T0a2fxw3lyjzWumiYxds1+VUe16sfuzvwxbXRj6uqlmXFusYBjdRjxuXa19j6W7B8azTk5K6+667bNujSnGzSpdEms+JQqSTrNy1ZKtUrSk75Sbe62ySwRhKUZKE23Fu5X6ae0d3mGnvp/NeB7HAdNNPKnmd+mvAo0bK8pzU0/uWJ16Eo4x9jrt1nVWDjurNxPaZUGXkpttjdUmlv5dp75apLEamOnV+TzZSeXEs2CtZp81ELjDr3/SPayawVrNPmohcYde/wCke1k3KHyUf+vkeLbbeJFndgfXqfK+6zhO7A+vU+V91mHa7aHevMv1tnLuLRaNRLmvsKUi62jUS5r7ClI1eW9cOP4Kdj/I8ABhmgS+LmuS5j7UWQreLmuS5j7UWQ+q5K+WXezJutowADRK4AAAAAAIHGX9vln9ieIHGX9vln9ijyl8tLh5k1vtV+9RBnh6SuBaNKpepK+a0k3ma4ltnzFvRdaooJ4zvNWpUUI6TI2jWlB3wk48n33TvoYbqx1WTJcaufUS1uwXCqs3qtaTS6miLWAal+qjdu5+y40XaXtu8Um2uz/X9FXnqNRZmscCbsVqVaGUs2e5p7T20Q2MVnUZRkv1J38q2+smcH2RUYZKd+e9vjIbGG0KUowX6U7+V3Zuov36/wDk/wAvxdHj/wCEFvtvd1Ehi/O+ldvZNff7n4w3a6lLJcGrnffmTz7X3IvA1t/CndLUy0+J7TLFabPGrHJlpbu5uNHLWo7i00YSxJdH+vscqrQq5kuh9JXvPFbfdSPPPFbfdSPtUwDO/wBWUGuO9diZ2WDAyg8qo1J7SuzdemUYUeUJSw21256CxKdullJMjfPFbfL5I4ak3JuT0273ysncLWSjCLlk3Sekou698hAlW+hWpy0Kk9Lr1ktBwktKKwW3BWs0+aiFxh17/pHtZN4K1mnzUcGFMGTq1MqLjdkpZ29q/i4zavKc6lpGMFl+75FKhJQq5faQB24H16nyvus+/mKruw+b8D52Gg6dohCV16e1xxb+5jUrWtTqwlOLS0kXalWEoSSfUWW0aiXNfYUpF2rRvi1uprqK55iq7sPm/A1OVberVcebjnGSraVIwzpPBGHhJVcC1Ipybhck3pva+BGmFVoVKWFNYyaEakZ/C8kvi5rkuY+1FkK3i5rkuY+1FkPpeSvll3sy7raMAA0SuAAAAAACBxl/b5Z/YniBxl/b5Z/Yo8o/LS4eaJrfar96iDPYScWmm01pNHgPktRrvD1kxZcPNXKpG/8AyWn8jr8+0tyfyXiVwGhDlS4isZz3orytKTJe14bcs1OOT/k7r/gREnfnfzAK1e4qVnmbyS06Uafwg7bFhSpSV2aUdx/ZnEDxSrTpPSg8M9TjGaxJE/HD8duEvhcfKth/eQ+Lf2RCguPlS5a+L7f0QK0pbj6WivKo8qbvf/tJHyPQUJScnlvJYWF0Il7JhpU4RhkN3K6+/wDo+3n9cG+l/RBAux5SuYpJS1dhA7ak3nH3J30gXBvpf0R8rffW/Gyf+t/+N2mcQPNS/r1MaT1POrrOxt6cc4X3J30hXBvpf0PSFcG+l/RBAk9aXP8Ay+39Hn0SluJm0YbU4yj+G1emr7934EMAVq9xUrtOb1dhLTpRp50SWxc1yXMfaiyFbxc1yXMfaiyH0XJXyy72Zt1tGAAaRXAAAAAAB8qtGMtVGL5Un2n1BxpPoYObyOnwcOivAeSU+Dh0V4HSDxzcNy8DuXvObyOnwcOivAeR0+Dh0V4HSDvNw3LwGWc3kdPg4dFeA8jp8HDorwOkDm4bl4DLObyOnwcOivAeR0+Dh0V4HSBzcdy8BlnN5HT4OHRXgPI6fBw6K8DpA5uO5eAy95zeR0+Dh0V4DyOnwcOivA6QObhuXgMs5/JKfBw6K8B5JT4OHRXgdAOc1HcvAZe85/JKfBw6K8DzySnwcOivA6Qd5uO5eAy95zeR0+Dh0V4DySnwcOivA6QObhuXgMvec3kdPg4dFeA8jp8HDorwOkDm4bl4DLPjToQjnjCK40kj7AHpJLoRwAA6AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//Z"
            width={60} alt=""
          ></img>
        </ul>
        <form class="d-flex" role="search">
          <input
            class="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          ></input>
          <button class="btn btn-outline-success" type="submit">
            Search
          </button>
        </form>

        <ul class="nav-item dropdown">
          <a
            class="nav-link dropdown-toggle"
            href="/#"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            English
          </a>
          <ul class="dropdown-menu">
            <li>
              <a class="dropdown-item" href="/#">
                hindi
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="/#">
                Another action
              </a>
            </li>
            <li>
              <a class="dropdown-divider" href="/#">
                dsfkjonm
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="/#">
                Something else here
              </a>
            </li>
          </ul>
        </ul>

        <ul className="nav-item">
          <button type="button" class="btn btn-success">
            Login
          </button>
          <button type="button" class="btn btn-warning">
            SELL
          </button>{" "}
        </ul>
      </div>
    </nav>
  );
};

export default header1;
