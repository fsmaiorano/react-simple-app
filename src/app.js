import React, { Component, Fragment } from 'react';

import Post from './Post';
import Header from './Header';

import "./style.scss";

class App extends Component {

    state = {
        posts: [
            {
                id: 1,
                author: "Albert Einstein",
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Albert_Einstein_Head.jpg/450px-Albert_Einstein_Head.jpg",
                date: "há 3 min",
                content: `Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, 
                totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. 
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui 
                ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, 
                sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.`
            },
            {
                id: 2,
                author: "José Saramago",
                image: "https://www.eusemfronteiras.com.br/wp-content/uploads/2016/12/jose-saramago-810x805.jpg",
                date: "há 10 min",
                content: `Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, 
                totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. 
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui 
                ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, 
                sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.`
            },
            {
                id: 3,
                author: "Tião do bar",
                image: "https://st3.depositphotos.com/2951719/14001/v/1600/depositphotos_140014552-stock-illustration-bald-man-drunk-cartoon-illustration.jpg",
                date: "há 1 hora",
                content: `Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, 
                totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. 
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui 
                ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, 
                sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.`
            },
        ],
    }

    render() {
        return (
            <Fragment>
                <Header />
                <section className="posts-wrapper">
                    <Post posts={this.state.posts} />
                </section>
            </Fragment>
        );
    }
};

export default App;